import styled from '@emotion/styled/macro';
import { Flex, Text } from '@chakra-ui/core';

import { ReactComponent as User } from '../../assets/icons/user-female.svg';

export const UserImage = styled(User)``;

export const UserName = styled(Text)`
  transition: transform 0.24s ease-out;
`;
export const UserEmail = styled(Text)`
  transition: transform 0.24s ease-out;
`;

export const Wrapper = styled(Flex)`
  &:hover {
    cursor: pointer;

    & ${UserImage} {
      filter: hue-rotate(25deg);
    }

    & ${UserName}, & ${UserEmail} {
      transform: translate(5px, 0px);
    }
  }
`;
