import React, { memo } from 'react';
import { Flex, Icon, Select, PseudoBox, Text } from '@chakra-ui/core';

import ButtonGooey from '../Button/ButtonGooey';
import Button from '../Button';

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
        py="8"
        px={[8, 8, 8, 12, 20]}
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
          focusBorderColor="gray.500"
          backgroundColor="transparent"
          borderColor="transparent"
          w="180px"
          mr="8"
        >
          <option value="option1">Crypto Wallet</option>
          <option value="option2">Etf's Wallet</option>
        </Select>
        <Button icon="bell" theme="transparent" variants="icon" size="md" />
        {/* <ButtonGooey
          id="transaction"
          onTransactionClick={() => 'clicked'}
          onWalletClick={() => 'clicked'}
        ></ButtonGooey> */}
      </Flex>
    </PseudoBox>
  );
};

export default memo(Navbar);
