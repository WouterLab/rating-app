import {
  AdditionTag,
  Advantages,
  HeadingTag,
  HhData,
  ParagraphTag,
} from '../../components';
import { PageComponentProps } from './PageComponent.props';
import styles from './PageComponent.module.scss';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const PageComponent = ({
  page,
  products,
  firstCategory,
}: PageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HeadingTag tag='h1'>{page.title}</HeadingTag>
        {products && (
          <AdditionTag color='grey' size='medium'>
            {products.length}
          </AdditionTag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <HeadingTag tag='h2'>Вакансии - {page.category}</HeadingTag>
        <AdditionTag color='red' size='medium'>
          hh.ru
        </AdditionTag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HeadingTag tag='h2'>Преимущества</HeadingTag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <HeadingTag tag='h2'>Получаемые навыки</HeadingTag>
      {page.tags.map((t) => (
        <AdditionTag key={t} color='primary'>
          {t}
        </AdditionTag>
      ))}
    </div>
  );
};
