import React from 'react';
import {
  Flex,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/core';

import IStat from './IStat';

const LabelStat: React.FC<IStat> = ({ currency, value, type, result }) => {
  return (
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
  );
};

export default LabelStat;
