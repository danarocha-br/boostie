import React from 'react';
import { Flex, Text, PseudoBox, Divider, Skeleton } from '@chakra-ui/core';
import { motion, AnimationControls } from 'framer-motion';
import Stat from '../../Labels/Stat';

import IStat from '../../Labels/Stat/IStat';
import StatChart from './StatChart';

import { Serie } from '@nivo/line';
import Card from '../index';

type IData = { data: Serie[]; animate: AnimationControls };

const CardStat: React.FC<IStat & IData> = ({
  value,
  currency,
  result,
  month,
  year,
  data,
  isVisible,
  loading,
  animate,
}) => {
  return (
    <motion.div animate={animate} style={{ height: '100%' }}>
      <Card variants="bordered">
        <PseudoBox
          mb="auto"
          alignItems={['center', 'center', 'initial', 'initial']}
        >
          <Skeleton isLoaded={!loading} borderRadius="lg" maxW="100px">
            <Text
              textTransform="uppercase"
              fontWeight="medium"
              textAlign={['center', 'center', 'left', 'left']}
            >
              {month} {year}
            </Text>
          </Skeleton>
          <Divider
            borderBottomWidth="4px"
            borderBottomColor="gray.500"
            width={6}
            visibility={['hidden', 'hidden', 'initial', 'initial']}
          />
        </PseudoBox>

        {/* <StatChart data={data} /> */}

        <Flex flexDirection="column">
          <Stat
            type={Number(result) < 0 ? 'decrease' : 'increase'}
            value={value}
            currency={currency}
            result={result}
            isVisible={isVisible}
            loading={loading}
          />
        </Flex>
      </Card>
    </motion.div>
  );
};

CardStat.defaultProps = {
  type: 'increase',
  value: 0.0,
  currency: '$',
};

export default CardStat;
