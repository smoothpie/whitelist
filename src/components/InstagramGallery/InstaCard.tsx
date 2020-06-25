import React, { useState } from "react";
import { InstagramItemCard, InstagramItem } from "./styled";
import { useSpring, animated, config } from "react-spring";
import { isTablet, isMobile } from "react-device-detect";

type Props = {
  fluid: any;
  last?: boolean;
};

const InstaCard: React.FC<Props> = ({ fluid, last }) => {
  const [flipped, set] = useState(false);
  const effect = useSpring({
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: config.slow
  });

  const AnimatedInstagramItem = animated(InstagramItem);
  return (
    <>
      {isMobile || isTablet ? (
        <InstagramItemCard>
          <AnimatedInstagramItem fluid={fluid} last={last} />
        </InstagramItemCard>
      ) : (
        <InstagramItemCard
          onMouseEnter={() => set(!flipped)}
          onMouseLeave={() => set(!flipped)}
        >
          <AnimatedInstagramItem fluid={fluid} style={effect} last={last} />
        </InstagramItemCard>
      )}
    </>
  );
};

export default InstaCard;
