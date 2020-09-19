import React from 'react';
import { Flex, Text, PseudoBox, Divider } from '@chakra-ui/core';

import Card from '../index';
import Stat from '../../Labels/Stat';
import useDisplayInvestments from '~/contexts/displayInvestments';

import IStat from '../../Labels/Stat/IStat';
// import StatChart from './StatChart';

const CardStat: React.FC<IStat> = ({
  type,
  value,
  currency,
  result,
  month,
  year,
}) => {
  const displayInvestments = useDisplayInvestments().displayInvestment;

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

        {/* <StatChart /> */}

        <Flex flexDirection="column">
          <Stat
            type={Number(result) < 0 ? 'decrease' : 'increase'}
            value={value}
            currency={currency}
            result={result}
            isVisible={displayInvestments}
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
