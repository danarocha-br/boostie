import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Image,
  Text,
} from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

import DefaultWrapper from '~/pages/_layouts/defaultWrapper';
import Button from '~/components/Button';
import useAuth from '~/contexts/auth';

const Login: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const { signIn } = useAuth();
  let history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    signIn(inputValue);

    history.push('/dashboard');
  };

  return (
    <DefaultWrapper>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        w={['100%', '400px']}
        bg="white"
        rounded="small"
        px={12}
        py={10}
        zIndex={1}
        boxShadow="0px 10px 40px -10px rgba(0,64,128,0.05)"
      >
        <form onSubmit={handleSubmit}>
          <FormControl
            isRequired
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image
              display="flex"
              src="https://res.cloudinary.com/danarocha/image/upload/v1600523763/github/boostie-logo_oymwns.png"
              w="150px"
              mb={12}
            ></Image>

            <Text textAlign="center" mb={8} color="gray.500" fontSize="regular">
              Thanks for checking out this UI dashboard study.
            </Text>

            <FormLabel
              htmlFor="name"
              color="gray.500"
              fontSize="sm"
              textAlign="left"
            >
              Type your name to enter
            </FormLabel>
            <Input
              type="name"
              id="name"
              aria-describedby="name-helper-text"
              mb={8}
              mt={2}
              size="lg"
              rounded="12px"
              value={inputValue}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button
            label="Ready to Go"
            variants="block"
            theme="success"
            size="lg"
            type="submit"
            disabled={!inputValue}
          />
        </form>
      </Flex>
    </DefaultWrapper>
  );
};

export default Login;
