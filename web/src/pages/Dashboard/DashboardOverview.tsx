import React from 'react';
import { Grid } from '@chakra-ui/core';

import CardOffer from '../../components/Card/CardOffer';
import CardAccountOverview from '../../components/Card/CardAccountOverview';
import { IDashboardProps } from "./IDashboardProps";

import { motion } from 'framer-motion';

const animateCards = {
  unmounted: {
    y: -50,
    opacity: 0,
  },
  mounted: {
    y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};



const AnimatedContainer = motion.custom(Grid);
const AnimatedCard = motion.custom(Grid);

const DashboardOverview: React.FC<IDashboardProps> = ({isLoading}) => {
  return (
    <AnimatedContainer
      height="290px"
      width="100%"
      templateColumns={['1fr', '1fr', '1fr', '400px 1fr']}
      initial="unmounted"
      animate="mounted"
      variants={animateCards}
      layout
      transition={{
        type: 'spring',
      }}
    >
      <AnimatedCard
        variants={animateCards}
        key="offer"
        pr={6}
        display={['none', 'none', 'none', 'flex']}
        w="100%"
      >
        <CardOffer />
      </AnimatedCard>
      <AnimatedCard variants={animateCards} key="overview" w="100%">
        <CardAccountOverview isLoading={isLoading} />
      </AnimatedCard>
    </AnimatedContainer>
  );
};

export default DashboardOverview;
