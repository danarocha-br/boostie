import styled from '@emotion/styled/macro';
import { Flex } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const FlexMotion = motion.custom(Flex);

export const StatCardContainer = styled(FlexMotion)`
  div {
    margin-right: 20px;
  }
`;
