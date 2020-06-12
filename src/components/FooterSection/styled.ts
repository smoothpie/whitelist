import styled from "styled-components";

export const FooterSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

export const Map = styled.div`
  filter: grayscale(100%);
  margin-top: 30px;
  &:hover {
    filter: none;
  }
`;

export const StyledIframe = styled.iframe`
  width: 925px;
  height: 465px;
  border: none;
`;
