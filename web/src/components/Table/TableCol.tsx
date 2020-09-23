import React, { ReactText } from 'react';

import { TableColContainer } from './styles';
import colors from '~/styles/colors';
import { Skeleton } from '@chakra-ui/core';

interface ITableColProps {
  label?: string | ReactText;
  color?: string | ReactText;
  loading?: boolean;
}

const TableCol: React.FC<ITableColProps> = ({ color, children, loading }) => {
  function getColor(color: string | undefined | ReactText) {
    switch (color) {
      case 'positive':
        return colors.green[900];

      case 'negative':
        return colors.red[900];

      default:
        return colors.gray[900];
    }
  }

  return (
    <TableColContainer fontWeight="normal" color={getColor(color)}>
      <Skeleton
        display="flex"
        isLoaded={!loading}
        borderRadius="lg"
        maxH="20px"
        justifyContent="center"
      >
        {children}
      </Skeleton>
    </TableColContainer>
  );
};

TableCol.defaultProps = {
  color: colors.gray[900],
};

export default TableCol;
