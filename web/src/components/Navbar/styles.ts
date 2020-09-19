import styled from '@emotion/styled/macro';
import { motion } from 'framer-motion';
import colors from '~/styles/colors';

export const AnimatedContainer = styled(motion.header)`
  grid-area: header;
  height: 100%;
  background-color: ${colors.gray[50]};
  border-bottom-left-radius: 45px;
`;
