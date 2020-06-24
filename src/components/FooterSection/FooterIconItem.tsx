import React from "react";
import { useSpring } from "react-spring";
import { FooterIcon } from "./styled";
import { IsMobile } from "../../constants";

type Props = {
  link: string;
};

const FooterIconItem: React.FC<Props> = ({ link, children }) => {
  const [props, set] = useSpring(() => ({
    transform: "scale(1) ",
    config: { mass: 2, tension: 400, friction: 12 }
  }));

  return (
    <>
      {!IsMobile ? (
        <FooterIcon
          href={link}
          target="blank_"
          style={props}
          onMouseEnter={() => set({ transform: "scale(1.3)" })}
          onMouseLeave={() => set({ transform: "scale(1)" })}
        >
          {children}
        </FooterIcon>
      ) : (
        <FooterIcon href={link} target="blank_">
          {children}
        </FooterIcon>
      )}
    </>
  );
};

export default FooterIconItem;
