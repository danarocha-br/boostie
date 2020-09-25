import React, { useMemo, useContext, useEffect, useState } from 'react';

import { IntersectionContext } from '../../../contexts/intersectionContext';
import { motion } from 'framer-motion';

interface IAnimatedCard {
  delayOrder: number;
  duration: number;
  easing: number;
  yOffset: number;
}

const AnimatedCard: React.FC<IAnimatedCard> = ({
  children,
  yOffset = 24,
  delayOrder,
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const { inView } = useContext(IntersectionContext);
  const [delay, setDelay] = useState(0.15);

  const offset = 0.3;

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset);
  }, [delayOrder, offset]);

  const transition = useMemo(
    () => ({
      duration,
      // delay: delayOrder / 5,
      delay,
      ease: easing,
    }),
    [duration, easing, delay],
    // [duration, delayOrder, easing],
  );

  const variants = {
    initial: {
      opacity: 0,
      transition,
      y: yOffset,
    },
    show: {
      y: 0,
      // x: 0,
      opacity: 1,
      transition: transition,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate={inView ? 'show' : 'initial'}
      exit="show"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
