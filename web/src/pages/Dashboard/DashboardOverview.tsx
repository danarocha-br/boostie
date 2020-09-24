import React from 'react';
import { Grid } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import CardOffer from '../../components/Card/CardOffer';
import CardAccountOverview from '../../components/Card/CardAccountOverview';
import { animateCards } from './animations';

import { IDashboardProps } from './IDashboardProps';

const AnimatedContainer = motion.custom(Grid);
const AnimatedCard = motion.custom(Grid);

const DashboardOverview: React.FC<IDashboardProps> = ({ isLoading }) => {
  return (
    <AnimatedContainer
      height={['100%', '100%', '290px']}
      width="100%"
      templateColumns={['100%', '100%', '100%', '400px 1fr']}
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
        // w="100%"
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
