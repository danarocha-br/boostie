import React from 'react';
import { Flex, Icon, Select, PseudoBox, Text } from '@chakra-ui/core';

import ButtonGooey from '../Button/ButtonGooey';

const Navbar: React.FC = () => {
  return (
    <PseudoBox
      as="header"
      gridArea="header"
      h="100%"
      bg="gray.50"
      borderBottomLeftRadius="xlarge"
    >
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        height="100%"
        p="8"
        h="110px"
      >
        <PseudoBox display="flex">
          <Icon name="sun" color="gray.500" size="22px" mr="3" />
          <Text color="gray.500" fontWeight="regular" mr="16">
            US Stock market opens in 3 hours
          </Text>
        </PseudoBox>

        <Select
          placeholder="Main Wallet"
          variant="outline"
          icon="triangle-down"
          iconSize="11px"
          iconColor="gray.500"
          focusBorderColor="purple.900"
          backgroundColor="transparent"
          borderColor="transparent"
          w="180px"
          mr="8"
        >
          <option value="option1">Crypto Wallet</option>
          <option value="option2">Etf's Wallet</option>
        </Select>
        <Icon name="bell" color="gray.900" size="24px" mr="8" />
        {/* <ButtonGooey
          id="transaction"
          onTransactionClick={() => 'clicked'}
          onWalletClick={() => 'clicked'}
        ></ButtonGooey> */}
      </Flex>
    </PseudoBox>
  );
};

export default Navbar;
