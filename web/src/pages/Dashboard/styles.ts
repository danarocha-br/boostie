import styled from '@emotion/styled/macro';
import { Flex } from '@chakra-ui/core';

export const StatCardContainer = styled(Flex)`
  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 200px;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
