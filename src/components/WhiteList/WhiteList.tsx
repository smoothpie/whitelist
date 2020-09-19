import React from "react";
import {
  WhiteListSection,
  Title,
  TitlePart1,
  TitlePart2,
  Description,
  Input,
  CategoriesTitle
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import WhiteListCategory from "./WhiteListCategory";

const WhiteList: React.FC = () => {
  const {
    whiteList: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      whiteList: markdownRemark(frontmatter: { type: { eq: "whiteList" } }) {
        frontmatter {
          titlePart1
          titlePart2
          description
          categoriesTitle
        }
      }
    }
  `);

  const { titlePart1, titlePart2, description, categoriesTitle } = frontmatter;

  const categories = [
    {
      title: "Еда",
      items: [{ title: "O’Petit" }, { title: "OZ" }, { title: "Друзья" }]
    },
    {
      title: "Кафе",
      items: [{ title: "O’Petit" }, { title: "OZ" }, { title: "Друзья" }]
    },
    {
      title: "Барухи",
      items: [{ title: "O’Petit" }, { title: "OZ" }, { title: "Друзья" }]
    }
  ];

  return (
    <WhiteListSection>
      <Title>
        <TitlePart1>{titlePart1}</TitlePart1>
        <TitlePart2>{titlePart2}</TitlePart2>
      </Title>
      <Description>{description}</Description>
      <Input placeholder="Поиск по категории или продукту" />
      <CategoriesTitle>{categoriesTitle}</CategoriesTitle>
      {categories.map((category: any, i: number) => (
        <WhiteListCategory key={i} category={category} />
      ))}
    </WhiteListSection>
  );
};

export default WhiteList;
