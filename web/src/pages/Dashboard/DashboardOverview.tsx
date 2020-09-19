import React from 'react';
import { Flex } from '@chakra-ui/core';

import CardOffer from '../../components/Card/CardOffer';
import CardAccountOverview from '../../components/Card/CardAccountOverview';

import { AnimatedContainer } from './styles';
import { motion } from 'framer-motion';

const animateCards = {
  unmounted: {
    y: -50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

const AnimatedCard = motion.custom(Flex);

const DashboardOverview: React.FC = () => {
  return (
    <AnimatedContainer
      initial="unmounted"
      animate="mounted"
      variants={animateCards}
      layout
      transition={{
        type: 'spring',
        staggerChildren: 0.2,
      }}
    >
      <AnimatedCard
        variants={animateCards}
        key="offer"
        w={1.7 / 4}
        pr={6}
        display={['none', 'none', 'none', 'flex']}
      >
        <CardOffer />
      </AnimatedCard>
      <AnimatedCard
        variants={animateCards}
        key="overview"
        w={['100%', '100%', '100%', 2.5 / 4]}
      >
        <CardAccountOverview />
      </AnimatedCard>
    </AnimatedContainer>
  );
};

export default DashboardOverview;
