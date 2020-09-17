import React from 'react';
import { Flex, Skeleton } from '@chakra-ui/core';

import { UserImage, Wrapper, UserName, UserEmail } from './styles';
import { User } from './User';

export interface ProfileLinkProps {
  user: User;
  loading?: boolean;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ user, loading }) => {
  return (
    <Wrapper w="100%">
      <Skeleton isLoaded={!loading} borderRadius="small">
        <UserImage />
      </Skeleton>

      <Flex flexDirection="column" ml="4" justifyContent="center" w="65%">
        <Skeleton isLoaded={!loading} borderRadius="small" height="4">
          <UserName fontSize="md" color="gray.900" isTruncated>
            {user.name}
          </UserName>
        </Skeleton>
        <Skeleton isLoaded={!loading} borderRadius="small" height="4" mt="2">
          <UserEmail fontSize="sm" color="gray.900" isTruncated>
            {user.email}
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
