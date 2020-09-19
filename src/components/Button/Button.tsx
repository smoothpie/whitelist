import React from "react";
import { StyledButton } from "./styled";

type Props = {
  children: any;
};

const Button: React.FC<Props> = props => (
  <StyledButton>{props.children}</StyledButton>
);

export default Button;
