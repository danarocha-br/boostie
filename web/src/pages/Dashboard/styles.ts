import styled from '@emotion/styled/macro';
import { Flex } from '@chakra-ui/core';
import { motion } from 'framer-motion';

export const StatCardContainer = styled(Flex)`
  div {
    margin-right: 20px;
  }
`;

export const AnimatedContainer = styled(motion.section)`
  height: 290px;
  width: 100%;
  display: flex;
`;
