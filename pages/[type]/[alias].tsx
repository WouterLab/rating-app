import React from 'react';
import axios from 'axios';
import { withLayout } from '../../layout/Layout/Layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { MenuItem } from '../../interfaces/menu.interface';
import { PageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: m.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: firstCategoryItem.id,
      }
    );
    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }
    const { data: page } = await axios.get<PageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: PageModel;
  products: ProductModel[];
}
