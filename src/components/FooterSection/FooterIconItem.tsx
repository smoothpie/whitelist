import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { FooterIcon } from "./styled";

type Props = {
  link: string;
};

const FooterIconItem: React.FC<Props> = ({ link, children }) => {
  const [isHovered, setHovered] = useState(false);

  const props = useSpring({
    transform: isHovered
      ? "scale(1.2) rotate(360deg)"
      : "scale(1) rotate(0deg)",
    config: config.slow
  });

  return (
    <FooterIcon
      href={link}
      target="blank_"
      style={props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </FooterIcon>
  );
};

export default FooterIconItem;
