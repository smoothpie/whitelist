import React, { useState } from "react";
import { InstagramItemCard, InstagramItem } from "./styled";
import { useSpring, animated } from "react-spring";

type Props = {
  fluid: string;
};

const InstaCard: React.FC<Props> = ({ fluid }) => {
  const [flipped, set] = useState(false);
  const effect = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const AnimatedInstagramItem = animated(InstagramItem);
  return (
    <InstagramItemCard
      onMouseEnter={() => set(!flipped)}
      onMouseLeave={() => set(!flipped)}
    >
      <AnimatedInstagramItem fluid={fluid} style={effect} />
    </InstagramItemCard>
  );
};

export default InstaCard;
