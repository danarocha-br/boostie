import React from 'react';
import {
  Divider,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
  PseudoBox,
  Flex,
} from '@chakra-ui/core';
import { AnimatePresence } from 'framer-motion';

import IStat from './IStat';
import {
  AnimatedContainerLarge,
  AnimatedContainerSmall,
} from './AnimatedContainer';

const LabelStat: React.FC<IStat> = ({
  value,
  type,
  result,
  loading,
  isVisible,
  title,
  divider,
}) => {
  return (
    <Flex alignItems="center" w="100%">
      <PseudoBox flexDirection="column" w="100%">
        <StatLabel
          fontSize="sm"
          fontWeight="regular"
          textTransform="capitalize"
        >
          {title}
        </StatLabel>

        <AnimatePresence>
          {isVisible ? (
            <Skeleton isLoaded={!loading} borderRadius="lg">
              <StatNumber fontSize="2xl" fontWeight="light" mt="-5px">
                {value}
              </StatNumber>
            </Skeleton>
          ) : (
            <AnimatedContainerLarge />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isVisible ? (
            <Skeleton isLoaded={!loading} borderRadius="lg">
              <StatHelpText
                mt="-5px"
                color={type === 'decrease' ? 'red.900' : 'green.900'}
              >
                {type && (
                  <StatArrow
                    type={type === 'decrease' ? 'decrease' : 'increase'}
                    color={type === 'decrease' ? 'red.900' : 'green.900'}
                    name={type === 'decrease' ? 'arrow-down' : 'arrow-up'}
                    size="14px"
                  />
                )}
                {result}
              </StatHelpText>
            </Skeleton>
          ) : (
            type && <AnimatedContainerSmall />
          )}
        </AnimatePresence>
      </PseudoBox>
      {divider && <Divider orientation="vertical" height="30px" mr={5} />}
    </Flex>
  );
};

LabelStat.defaultProps = {
  isVisible: true,
  title: 'Portfolio value',
  currency: '$',
};

export default LabelStat;
