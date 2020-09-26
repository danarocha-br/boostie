import React, { useCallback } from 'react';
import { Flex, Heading, Select, Grid } from '@chakra-ui/core';
import { useAnimation, motion } from 'framer-motion';
import { useScroll } from 'react-use-gesture';

import PortfolioGraphCard from '~/components/Card/PortfolioPieChartCard';
import CardStat from '~/components/Card/CardStat';
// import DragSlider from '~/components/DragSlider';
import { clamp } from './animations';

import { StatCardContainer } from './styles';

import {
  generatePortfolioHistory,
  generatePortfolioLineChartData,
} from '~/utils';
import useDisplayInvestments from '~/contexts/displayInvestments';

const PortfolioHistory = ({ isLoading }) => {
  const displayInvestments = useDisplayInvestments().displayInvestment;
  const historyData = generatePortfolioHistory();

  const hiddenChart = generatePortfolioLineChartData(false).timeline;

  const generateData = useCallback(() => {
    return generatePortfolioLineChartData().timeline;
  }, []);

  /* animation scroll */
  const controls = useAnimation();

  const cardsAnimation = (event) => {
    controls.start({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  };

  const bind = useScroll((event) => {
    cardsAnimation(event);
  });

  return (
    <>
      <Flex w="100%" justifyContent="space-between" alignItems="center" mt={10}>
        <Heading as="h2" fontSize="lg" fontWeight="regular">
          Portfolio History
        </Heading>
        <Select
          placeholder="Per Industries"
          variant="outline"
          icon="triangle-down"
          iconSize="11px"
          iconColor="gray.500"
          focusBorderColor="gray.500"
          backgroundColor="transparent"
          borderColor="transparent"
          w="180px"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Flex>

      <Grid
        minH="288px"
        maxH={['initial', 'initial', 'initial', '288px']}
        h={['500px', '500px', '500px', '288px']}
        mb={8}
        width="100%"
        justifyContent="space-between"
        templateColumns={['1fr', '1fr', '1fr', '1fr 345px']}
      >
        <StatCardContainer
          as="section"
          overflowX="scroll"
          overflowY="hidden"
          cursor="all-scroll"
          h={['100%']}
          mr={[0, 0, 0, 8]}
          pt={6}
          pb={1}
          boxShadow="inset -14px 0px 20px rgba(0,0,0,0.04), inset 0px 332px 0px rgb(255 255 255 / 86%)"
          {...bind()}
        >
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              width: '100%',
            }}
            drag="x"
            dragConstraints={{
              left: -1000,
              right: 0,
            }}
          >
            {Object.entries(historyData)
              .slice(0, -5)
              .map(([key, value]) => {
                return (
                  <CardStat
                    animate={controls}
                    key={key}
                    value={value.value}
                    result={value.result}
                    month={value.month}
                    year={value.year}
                    data={
                      displayInvestments && !isLoading
                        ? generateData()
                        : hiddenChart
                    }
                    isVisible={displayInvestments}
                    loading={isLoading}
                  />
                );
              })}
          </motion.div>
        </StatCardContainer>
        <PortfolioGraphCard isLoading={isLoading} />
      </Grid>
    </>
  );
};

export default PortfolioHistory;
