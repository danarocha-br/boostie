import React from 'react';
import { PseudoBox } from '@chakra-ui/core';
import { transparentize } from 'polished';

import colors from '../../styles/colors';

interface ICardProps {
  variants?: string | undefined;
  children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children, variants }) => {
  function VariCard(variants: string | undefined) {
    switch (variants) {
      case 'bordered':
        return (
          <PseudoBox
            p={6}
            rounded="small"
            bg="transparent"
            border="1px solid"
            borderColor="gray.300"
            w="100%"
            h="100%"
            transition="all .3s ease-in-out"
            _hover={{
              bg: transparentize(0.9, colors.gray[500]),
              transform: 'translateY(-7px)',
            }}
          >
            {children}
          </PseudoBox>
        );
      case 'colored':
        return (
          <PseudoBox
            p={6}
            rounded="small"
            bg="purple.900"
            w="100%"
            h="100%"
            variants={variants}
            boxShadow="0px 7px 5px rgba(0, 0, 0, 0.01)"
            transition="background .2s ease-in-out"
            _hover={{
              bg: transparentize(0.01, colors.purple[900]),
            }}
          >
            {children}
          </PseudoBox>
        );
      default:
        return (
          <PseudoBox
            p={6}
            rounded="small"
            bg="white"
            w="100%"
            h="100%"
            boxShadow="0px 7px 5px rgba(0, 0, 0, 0.01)"
            position="relative"
            variants={variants}
            _hover={{ boxShadow: '0px 7px 5px rgba(0, 0, 0, 0.03)' }}
            transition="box-shadow .3s ease-in-out"
          >
            {children}
          </PseudoBox>
        );
    }
  }

  return VariCard(variants);
};

Card.defaultProps = {
  variants: 'default',
};

export default Card;
