import styled from "styled-components";
import { FlexRowCenterCenter } from "../Typography";

export const FeedbackFormContainer = styled.div`
  ${FlexRowCenterCenter}
  margin-top: 1rem;
  width: 100%;
  & > form {
    width: 100% !important;
  }
  & button {
    margin-top: 1.5rem;
    padding: 1.125rem 0;
    width: 100%;
  }
`;
