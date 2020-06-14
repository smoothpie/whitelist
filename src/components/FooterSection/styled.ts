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
    transition: all 0.3s ease;
  }
`;

export const StyledIframe = styled.iframe`
  width: 1000px;
  height: 400px;
  border: none;
`;
