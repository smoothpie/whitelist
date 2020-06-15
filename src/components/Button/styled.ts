import styled from "styled-components";

export const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  margin-top: 15px;
  line-height: 55px;
  text-align: center;
  color: #eeeeee;
  font-family: "Manrope-Regular", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  outline: 0;
  opacity: 1;

  &:hover {
    &:after {
      transform: translateY(0) rotateX(0);
      opacity: 1;
    }

    &:before {
      transform: translateY(50%) rotateX(90deg);
      opacity: 0;
    }
  }

  &:after {
    content: attr(data-back);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    color: #1b1b1b;
    background-color: #eeeeee;
    transform: translateY(-50%) rotateX(90deg);
    opacity: 0;
    transition: 0.5s;
  }

  &:before {
    content: attr(data-front);
    position: relative;
    top: 0;
    left: 0;
    display: block;
    padding: 0 30px;
    line-height: 55px;
    color: #eeeeee;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(0) rotateX(0);
    opacity: 1;
    transition: 0.5s;
    border: 3px solid #e3b873;
  }
  @media (max-width: 1023px) {
    font-size: 1.3rem;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;
