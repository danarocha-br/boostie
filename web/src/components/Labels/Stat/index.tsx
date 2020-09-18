import React from 'react';
import {
  Flex,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
  PseudoBox,
} from '@chakra-ui/core';

import IStat from './IStat';

const LabelStat: React.FC<IStat> = ({
  currency,
  value,
  type,
  result,
  loading,
  isVisible,
}) => {
  return (
    <Flex flexDirection="column">
      <StatLabel fontSize="sm" fontWeight="regular">
        Portfolio Value
      </StatLabel>

      {isVisible ? (
        <Skeleton isLoaded={!loading} borderRadius="lg">
          <StatNumber fontSize="2xl" fontWeight="light" mt="-5px">
            {currency}
            {value}
          </StatNumber>
        </Skeleton>
      ) : (
        <PseudoBox bg="gray.200" h={30} mt={1} rounded="lg" />
      )}

      {isVisible ? (
        <Skeleton isLoaded={!loading} borderRadius="lg">
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
        </Skeleton>
      ) : (
        <PseudoBox bg="gray.200" h={15} w={16} mt={1} rounded="lg" />
      )}
    </Flex>
  );
};

LabelStat.defaultProps = {
  isVisible: true,
};

export default LabelStat;
