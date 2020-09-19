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
import { motion, AnimatePresence } from 'framer-motion';

import IStat from './IStat';
import colors from '../../../styles/colors';
import { transparentize } from 'polished';

// hide/show animation

const hidden = {
  opacity: 0,
  width: 0,
  height: 34,
  x: -80,
  transition: { delay: 0.1 },
};
const visible = {
  opacity: 0.8,
  backgroundColor: transparentize(0.7, colors.gray[500]),
  borderRadius: '6px',
  height: 34,
  width: 110,
  x: 0,
  transition: { delay: 0.1 },
};

const animationVariants = {
  visible: {
    ...visible,
  },
  hidden: {
    ...hidden,
  },
};

const LabelStat: React.FC<IStat> = ({
  currency,
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
                {currency}
                {value}
              </StatNumber>
            </Skeleton>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
            ></motion.div>
          )}

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
            type && (
              <motion.div
                initial={{ ...hidden, height: 20 }}
                animate={{
                  ...visible,
                  height: 20,
                  width: 80,
                  marginTop: '6px',
                }}
                exit={{ ...hidden, height: 20 }}
              ></motion.div>
            )
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
