import styled from "styled-components";
import { Link } from "gatsby";
import { H2, SectionTitle, H4 } from "../Typography";

export const WhiteListSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 7rem auto;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const WhiteListBrandStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border: 1px solid #ededed;
  text-decoration: none;
  color: #3e4554;
  &:hover {
    border-color: #cd0000;
  }
`;

export const Title = styled.div``;

export const TitlePart1 = styled(H2)`
  display: inline;
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 3rem;
  color: #cd0000;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`;

export const TitlePart2 = styled(H2)`
  display: inline;
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 3rem;
  color: #3e4554;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`;

export const Description = styled(H4)`
  margin-bottom: 2.5rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #3e4554;
`;

export const CategoriesTitle = styled(SectionTitle)`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: #3e4554;
`;

export const CategoryTitle: any = styled(SectionTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0.5rem;
  padding: 1rem;
  font-weight: ${({ active }: any) => (active ? "bold" : "normal")};
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #3e4554;
  background-color: ${({ active }: any) => (active ? "#ededed" : "#f7f7f7")};
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  svg {
    transform: ${({ active }: any) => (active ? "rotate(180deg)" : "none")};
  }
`;

export const BrandTitle = styled(H4)`
  margin: 0;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #3e4554;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const BrandAddress = styled.span`
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: #3e4554;
`;

export const BrandFeatures = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const BrandFeature = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  font-size: 0.9rem;
`;

export const InputContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
  }
`;

export const Input = styled.input`
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  height: 4rem;
  border: 1px solid #ced1d6;
  box-shadow: 0px 16px 35px rgba(0, 0, 0, 0.07);
  &:focus {
    outline: none;
    border-color: #cd0000;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  overflow-x: auto;
`;

export const Tag = styled.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ced1d6;
  border-radius: 50px;
  cursor: pointer;
`;

export const Suggestions = styled.div`
  margin-top: 2rem;
  line-height 24px;
  a {
    text-decoration: none;
    color: #cd0000;
  }
`;
