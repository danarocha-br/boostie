import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/core';

import { UserImage, Wrapper, UserName, UserEmail } from './styles';

export interface ProfileLinkProps {
  name: string;
  email: string;
  loading?: boolean;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ name, email, loading }) => {
  return (
    <Wrapper w="100%">
      <Skeleton isLoaded={!loading} borderRadius="small">
        <UserImage />
      </Skeleton>

      <Flex flexDirection="column" ml="4" justifyContent="center" w="65%">
        <Skeleton isLoaded={!loading} borderRadius="small" height="4">
          <UserName fontSize="md" color="gray.900" isTruncated>
            {name}
          </UserName>
        </Skeleton>
        <Skeleton isLoaded={!loading} borderRadius="small" height="4" mt="2">
          <UserEmail fontSize="sm" color="gray.900" isTruncated>
            {email}
          </UserEmail>
        </Skeleton>
      </Flex>
    </Wrapper>
  );
};

ProfileLink.defaultProps = {
  loading: false,
};

export default ProfileLink;
