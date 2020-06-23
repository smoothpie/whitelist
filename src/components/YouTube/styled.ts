import styled from "styled-components";
import { SectionMarginBottom, FlexColumnCenterCenter } from "../Typography";
import YouTubeIcon from "../../assets/images/svg/youtube.svg";

export const YouTubeSection = styled.section`
  ${FlexColumnCenterCenter}
  ${SectionMarginBottom}
`;

export const YouTubeButton = styled(YouTubeIcon)`
  width: 200px;
  height: 200px;
`;
