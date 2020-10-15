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
  CategoriesTitle,
  Tags,
  Tag,
  Suggestions
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
  const [searchValue, setSearchValue] = useState<string>("");

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

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setFilteredCategories(
      categoriesWithBrands
        .filter(c => {
          const categoryNameMatch = c.name
            .toLowerCase()
            .includes(value.toLowerCase());
          const brandNameOrTagMatch = c.brand.find((b: any) => {
            const nameMatch = b.name
              .toLowerCase()
              .includes(value.toLowerCase());
            const tagMatch = b.tag.find((t: any) =>
              t.name.includes(value.toLowerCase())
            );
            return nameMatch || tagMatch;
          });
          return categoryNameMatch || brandNameOrTagMatch;
        })
        .map(c => {
          const categoryNameMatch = c.name
            .toLowerCase()
            .includes(value.toLowerCase());
          return {
            ...c,
            brand: categoryNameMatch
              ? c.brand
              : c.brand.filter((b: any) => {
                  const nameMatch = b.name
                    .toLowerCase()
                    .includes(value.toLowerCase());
                  const tagMatch = b.tag.find((t: any) =>
                    t.name.includes(value.toLowerCase())
                  );
                  return nameMatch || tagMatch;
                })
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
            value={searchValue}
            onChange={e => handleSearch(e.target.value)}
            placeholder="Поиск по категории или продукту"
          />
          <SearchIcon />
        </InputContainer>
        <CategoriesTitle>ТОП ПОИСКА</CategoriesTitle>
        <Tags>
          <Tag onClick={() => handleSearch("кофе")}>Кофе</Tag>
          <Tag onClick={() => handleSearch("еда")}>Еда</Tag>
          <Tag onClick={() => handleSearch("алкоголь")}>Алкоголь</Tag>
          <Tag onClick={() => handleSearch("чай")}>Чай</Tag>
        </Tags>
      </MaxWidth>
      <BrandMap
        brands={brands.filter(
          (b: any) => b.location.length && b.location[0].lat
        )}
      />
      <MaxWidth>
        <CategoriesTitle>{categoriesTitle}</CategoriesTitle>
        {filteredCategories.map((category: any, i: number) => (
          <WhiteListCategory key={i} category={category} />
        ))}
        <Suggestions>
          Есть идеи по улучшению проекта? Пишите нам:
          <a href="mailto:whitelist.by@gmail.com"> whitelist.by@gmail.com</a>
        </Suggestions>
      </MaxWidth>
    </WhiteListSection>
  );
};

export default WhiteList;
