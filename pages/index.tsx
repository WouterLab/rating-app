import React, { useState } from "react";
import {
  HeadingTag,
  Button,
  ParagraphTag,
  AdditionTag,
  Rating,
} from "../components/";
import { withLayout } from "../layout/Layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from 'next';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);
  return (
    <>
      <HeadingTag tag="h1">Текст</HeadingTag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <ParagraphTag size="small">Some text</ParagraphTag>
      <ParagraphTag size="medium">Some text</ParagraphTag>
      <ParagraphTag size="large">Some text</ParagraphTag>
      <AdditionTag size="medium" color="ghost">
        Meow
      </AdditionTag>
      <AdditionTag size="large" color="primary">
        Meow
      </AdditionTag>
      <AdditionTag size="medium" color="red">
        Meow
      </AdditionTag>
      <AdditionTag size="medium" color="green">
        Meow
      </AdditionTag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
      firstCategory
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
