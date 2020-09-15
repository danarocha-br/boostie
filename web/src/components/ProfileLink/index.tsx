import React, { useState } from 'react';
import { Flex, Skeleton } from '@chakra-ui/core';

import { UserImage, Wrapper, UserName, UserEmail } from './styles';

export interface ProfileLinkProps {
  name: string;
  email: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ name, email }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <Wrapper w="100%">
      <Skeleton isLoaded={!isLoading} borderRadius="small">
        <UserImage />
      </Skeleton>

      <Flex flexDirection="column" ml="4" justifyContent="center" w="65%">
        <Skeleton isLoaded={!isLoading} borderRadius="small" height="4">
          <UserName fontSize="md" color="gray.900" isTruncated>
            {name}
          </UserName>
        </Skeleton>
        <Skeleton isLoaded={!isLoading} borderRadius="small" height="4" mt="2">
          <UserEmail fontSize="sm" color="gray.900" isTruncated>
            {email}
          </UserEmail>
        </Skeleton>
      </Flex>
    </Wrapper>
  );
};

export default ProfileLink;
