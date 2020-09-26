import React from "react";
import { StyledButton } from "./styled";

type Props = {
  children: any;
  type?: "submit" | "reset" | "button";
};

const Button: React.FC<Props> = ({ children, type }) => (
  <StyledButton type={type}>{children}</StyledButton>
);

export default Button;
