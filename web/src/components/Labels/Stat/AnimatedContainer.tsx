import React from 'react';
import { motion } from 'framer-motion';
import colors from '../../../styles/colors';
import { transparentize } from 'polished';

// hide/show animation

const hidden = {
  opacity: 0,
  width: 0,
  height: 34,
  x: -80,
  transition: { delay: 0.1 },
};
const visible = {
  opacity: 1,
  backgroundColor: transparentize(0.8, colors.gray[500]),
  borderRadius: '6px',
  height: 34,
  width: 110,
  x: 0,
  transition: { delay: 0.1 },
};

const animationVariants = {
  visible: {
    ...visible,
  },
  hidden: {
    ...hidden,
  },
};
type AnimatedProps = { key?: string };

export const AnimatedContainerLarge: React.FC<AnimatedProps> = ({ key }) => (
  <motion.div
    layout
    key={key}
    initial="hidden"
    animate="visible"
    variants={animationVariants}
  ></motion.div>
);

export const AnimatedContainerSmall: React.FC<AnimatedProps> = ({ key }) => (
  <motion.div
    key={key}
    initial={{ ...hidden, height: 20 }}
    animate={{
      ...visible,
      height: 20,
      width: 80,
      marginTop: '6px',
    }}
    exit={{ ...hidden, height: 20 }}
  ></motion.div>
);
