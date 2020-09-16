import React from 'react';
import { PseudoBox } from '@chakra-ui/core';

interface ICardProps {
  variants?: string | undefined;
  children?: React.ElementType;
}

const Card: React.FC<ICardProps> = ({ children, variants }) => {
  function renderVariantCard(variants: string | undefined) {
    switch (variants) {
      case 'bordered':
        return (
          <PseudoBox
            p={4}
            rounded="small"
            bg="transparent"
            border="1px solid"
            borderColor="gray.500"
            w="100%"
            h="100%"
            boxShadow="0px 7px 5px rgba(0, 0, 0, 0.01)"
          >
            {children}
          </PseudoBox>
        );
      case 'colored':
        return (
          <PseudoBox
            p={4}
            rounded="small"
            bg="purple.900"
            w="100%"
            h="100%"
            variants={variants}
          >
            {children}
          </PseudoBox>
        );
      default:
        return (
          <PseudoBox
            p={4}
            rounded="small"
            bg="white"
            w="100%"
            h="100%"
            boxShadow="0px 7px 5px rgba(0, 0, 0, 0.01)"
            variants={variants}
          >
            {children}
          </PseudoBox>
        );
    }
  }

  return renderVariantCard(variants);
};

Card.defaultProps = {
  variants: 'default',
};

export default Card;
