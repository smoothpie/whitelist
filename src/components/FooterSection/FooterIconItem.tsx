import React from "react";
import { useSpring, config } from "react-spring";
import { FooterIcon } from "./styled";

type Props = {
  link: string;
};

const FooterIconItem: React.FC<Props> = ({ link, children }) => {
  const [props, set] = useSpring(() => ({
    transform: "scale(1) rotate(0deg)",
    config: config.slow
  }));

  return (
    <FooterIcon
      href={link}
      target="blank_"
      style={props}
      onMouseEnter={() => set({ transform: "scale(1.2) rotate(360deg)" })}
      onMouseLeave={() => set({ transform: "scale(1) rotate(0deg)" })}
    >
      {children}
    </FooterIcon>
  );
};

export default FooterIconItem;
