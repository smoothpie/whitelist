import React, { useState } from "react";
import { useSpring, config } from "react-spring";
import { FooterIcon } from "./styled";

type Props = {
  link: string;
};

const FooterIconItem: React.FC<Props> = ({ link, children }) => {
  // TODO: ask questions
  // const [isHovered, setHovered] = useState(false);

  // const props = useSpring({
  //   transform: isHovered
  //     ? "scale(1.2) rotate(360deg)"
  //     : "scale(1) rotate(0deg)",
  //   config: config.slow
  // });

  const [props, set] = useSpring(() => ({
    transform: "scale(1) rotate(0deg)",
    config: config.slow
  }));

  return (
    <FooterIcon
      href={link}
      target="blank_"
      style={props}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}

      onMouseEnter={() => set({ transform: "scale(1.2) rotate(360deg)" })}
      onMouseLeave={() => set({ transform: "scale(1) rotate(0deg)" })}
    >
      {children}
    </FooterIcon>
  );
};

export default FooterIconItem;
