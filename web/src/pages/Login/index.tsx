import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, FormLabel, Input } from '@chakra-ui/core';

import Button from '../../components/Button';
import useAuth from '~/contexts/auth';

const Login: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const { signIn } = useAuth();
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signIn(inputValue);
    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          id="name"
          placeholder="name"
          onChange={handleInputChange}
          value={inputValue}
        />
      </FormControl>
      <Button variants="block" theme="success" type="submit" label="submit" />
    </form>
  );
};

export default Login;
