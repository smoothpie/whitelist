import styled from "styled-components";

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0;
  label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: -0.41px;
    color: #3e4554;
  }
  input {
    padding: 1rem;
    height: 3rem;
    border: 1px solid #ced1d6;
    &:focus {
      outline: none;
      border-color: #cd0000;
    }
    ::-webkit-input-placeholder {
      color: #ced1d6;
    }
  }
  textarea {
    padding: 1.25rem 1rem;
    height: 6.5rem;
    border: 1px solid #ced1d6;
    font-size: 16px;
    line-height: 21px;
    &:focus {
      outline: none;
      border-color: #cd0000;
    }
    ::-webkit-input-placeholder {
      color: #ced1d6;
    }
  }
`;

export const Error = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #cd0000;
`;
