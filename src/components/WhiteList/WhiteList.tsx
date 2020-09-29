import React, { useState } from "react";
import SearchIcon from "../../assets/images/svg/search.svg";
import {
  WhiteListSection,
  Title,
  TitlePart1,
  TitlePart2,
  Description,
  InputContainer,
  Input,
  CategoriesTitle,
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import WhiteListCategory from "./WhiteListCategory";

type WhiteList = {
  categories: any[];
}

const WhiteList: React.FC<WhiteList> = (props) => {
  const { categories } = props;
  const categoriesWithBrands = categories.filter(c => c.brand.length);
  const [ filteredCategories, setFilteredCategories ] = useState<any[]>(categoriesWithBrands);

  const {
    whiteList: { frontmatter },
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

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setFilteredCategories(
      categoriesWithBrands
        .filter(c => {
          const categoryNameMatch = c.name.toLowerCase().includes(value.toLowerCase());
          const brandNameMatch = c.brand.find((b: any) => b.name.toLowerCase().includes(value.toLowerCase()));
          return categoryNameMatch || brandNameMatch;
        })
        .map(c => ({
          ...c,
          brand: c.brand.filter((b: any) => b.name.toLowerCase().includes(value.toLowerCase())),
        }))
    )
  }

  const { titlePart1, titlePart2, description, categoriesTitle } = frontmatter;

  return (
    <WhiteListSection>
      <Title>
        <TitlePart1>{titlePart1}</TitlePart1>
        <TitlePart2>{titlePart2}</TitlePart2>
      </Title>
      <Description>{description}</Description>
      <InputContainer>
        <Input
          onChange={handleSearch}
          placeholder="Поиск по категории или продукту"
        />
        <SearchIcon />
      </InputContainer>
      <CategoriesTitle>{categoriesTitle}</CategoriesTitle>
      {filteredCategories.map((category: any, i: number) => (
        <WhiteListCategory key={i} category={category} />
      ))}
    </WhiteListSection>
  );
};

export default WhiteList;
