import React from 'react';
import { Flex, Text, PseudoBox, Divider } from '@chakra-ui/core';

import Card from '../index';
import Stat from '../../Labels/Stat';

import IStat from '../../Labels/Stat/IStat';
import StatChart from './StatChart';

import { Serie } from '@nivo/line';

type IData = { data: Serie[] };

const CardStat: React.FC<IStat & IData> = ({
  value,
  currency,
  result,
  month,
  year,
  data,
  isVisible,
}) => {
  return (
    <Card variants="bordered">
      <Flex flexDirection="column" alignContent="space-between" h="100%">
        <PseudoBox mb="auto">
          <Text textTransform="uppercase" fontWeight="medium">
            {month} {year}
          </Text>
          <Divider
            borderBottomWidth="4px"
            borderBottomColor="gray.500"
            width={6}
          />
        </PseudoBox>

        <StatChart data={data} />

        <Flex flexDirection="column">
          <Stat
            type={Number(result) < 0 ? 'decrease' : 'increase'}
            value={value}
            currency={currency}
            result={result}
            isVisible={isVisible}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

CardStat.defaultProps = {
  type: 'increase',
  value: 0.0,
  currency: '$',
};

export default CardStat;
