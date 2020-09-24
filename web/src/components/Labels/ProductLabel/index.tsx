import React from 'react';
import { Flex, PseudoBox, Image, Heading, Skeleton } from '@chakra-ui/core';
import { transparentize } from 'polished';

import colors from '~/styles/colors';

interface IProductLabelProps {
  variants?: 'amex' | 'nyse' | 'nasdaq ' | undefined | string;
  url: string;
  label: string;
  loading?: boolean;
}

function getVariantColors(variants: string | undefined) {
  switch (variants) {
    case 'amex':
      return transparentize(0.5, colors.yellow[900]);

    case 'nasdaq':
      return colors.blue[50];

    case 'nyse':
      return transparentize(0.2, colors.green[900]);

    default:
      return colors.blue[50];
  }
}

const ProductLabel: React.FC<IProductLabelProps> = ({
  variants,
  loading,
  url,
  label,
}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" h="60px" flex="1">
      {!loading && (
        <PseudoBox
          as="span"
          h="100%"
          w="4px"
          backgroundColor={getVariantColors(variants)}
        />
      )}
      <Skeleton
        isLoaded={!loading}
        borderRadius="rounded"
        maxH="35px"
        maxW="35px"
        w="35px"
        ml={4}
      >
        <Image
          rounded="rounded"
          w="35px"
          h="35px"
          minH="35px"
          maxW="35px"
          ml={4}
          src={`//logo.clearbit.com/${url}`}
          alt={loading ? '' : url}
        />
      </Skeleton>

      <Skeleton
        isLoaded={!loading}
        borderRadius="lg"
        maxH="25px"
        h="25px"
        maxW="70px"
        w="70px"
      >
        <Heading as="h5" fontSize="md" fontWeight="medium" ml={5}>
          {label}
        </Heading>
      </Skeleton>
    </Flex>
  );
};

export default ProductLabel;
