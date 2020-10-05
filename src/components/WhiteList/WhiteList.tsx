import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import SearchIcon from "../../assets/images/svg/search.svg";
import { MaxWidth } from "../Layout/styled";
import {
  WhiteListSection,
  Title,
  TitlePart1,
  TitlePart2,
  Description,
  InputContainer,
  Input,
  CategoriesTitle
} from "./styled";
import BrandMap from "../BrandMap";
import WhiteListCategory from "./WhiteListCategory";

type WhiteList = {
  categories: any[];
};

const WhiteList: React.FC<WhiteList> = props => {
  const { categories } = props;
  const categoriesWithBrands = categories.filter(c => c.brand.length);
  const [filteredCategories, setFilteredCategories] = useState<any[]>(
    categoriesWithBrands
  );

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

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setFilteredCategories(
      categoriesWithBrands
        .filter(c => {
          const categoryNameMatch = c.name
            .toLowerCase()
            .includes(value.toLowerCase());
          const brandNameMatch = c.brand.find((b: any) =>
            b.name.toLowerCase().includes(value.toLowerCase())
          );
          return categoryNameMatch || brandNameMatch;
        })
        .map(c => {
          const categoryNameMatch = c.name
            .toLowerCase()
            .includes(value.toLowerCase());
          return {
            ...c,
            brand: categoryNameMatch
              ? c.brand
              : c.brand.filter((b: any) =>
                  b.name.toLowerCase().includes(value.toLowerCase())
                )
          };
        })
    );
  };

  const { titlePart1, titlePart2, description, categoriesTitle } = frontmatter;

  const brands = [].concat(
    ...filteredCategories.map(c =>
      c.brand.map((b: any) => ({ ...b, categoryName: c.name }))
    )
  );

  return (
    <WhiteListSection>
      <MaxWidth>
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
      </MaxWidth>
      <BrandMap brands={brands} />
      <MaxWidth>
        <CategoriesTitle>{categoriesTitle}</CategoriesTitle>
        {filteredCategories.map((category: any, i: number) => (
          <WhiteListCategory key={i} category={category} />
        ))}
      </MaxWidth>
    </WhiteListSection>
  );
};

export default WhiteList;
