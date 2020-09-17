import React from 'react';
import {
  Flex,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Text,
  PseudoBox,
  Divider,
} from '@chakra-ui/core';

import Card from '../index';

interface ICardStatProps {
  type?: 'decrease' | 'increase';
  value: number;
  currency: string;
  result: string;
  year: number;
  month: string;
}

const CardStat: React.FC<ICardStatProps> = ({
  type,
  value,
  currency,
  result,
  month,
  year,
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

        <Flex flexDirection="column">
          <StatLabel fontSize="sm" fontWeight="regular">
            Portfolio Value
          </StatLabel>
          <StatNumber fontSize="2xl" fontWeight="light" mt="-5px">
            {currency}
            {value}
          </StatNumber>

          <StatHelpText
            mt="-5px"
            color={type === 'decrease' ? 'red.900' : 'green.900'}
          >
            <StatArrow
              type={type === 'decrease' ? 'decrease' : 'increase'}
              color={type === 'decrease' ? 'red.900' : 'green.900'}
              name={type === 'decrease' ? 'arrow-down' : 'arrow-up'}
              size="14px"
            />
            {result}
          </StatHelpText>
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
