import styled from "styled-components";
import { SectionMarginBottom } from "../Typography";
import YouTubeIcon from "../../assets/images/svg/youtube.svg";

export const YouTubeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SectionMarginBottom}
`;

export const YouTubeButton = styled(YouTubeIcon)`
  width: 200px;
  height: 200px;
`;
