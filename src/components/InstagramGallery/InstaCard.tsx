import React, { useState } from "react";
import { InstagramItemCard, InstagramItem } from "./styled";
import { useSpring, animated, config } from "react-spring";
import { IsMobile } from "../../constants";

type Props = {
  fluid: string;
};

const InstaCard: React.FC<Props> = ({ fluid }) => {
  const [flipped, set] = useState(false);
  const effect = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: config.slow
  });

  const AnimatedInstagramItem = animated(InstagramItem);
  return (
    <>
      {!IsMobile ? (
        <InstagramItemCard
          onMouseEnter={() => set(!flipped)}
          onMouseLeave={() => set(!flipped)}
        >
          <AnimatedInstagramItem fluid={fluid} style={effect} />
        </InstagramItemCard>
      ) : (
        <InstagramItemCard>
          <AnimatedInstagramItem fluid={fluid} />
        </InstagramItemCard>
      )}
    </>
  );
};

export default InstaCard;
