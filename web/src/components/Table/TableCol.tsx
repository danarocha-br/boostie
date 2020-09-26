import React, { ReactText } from 'react';

import { TableColContainer } from './styles';
import colors from '~/styles/colors';

interface ITableColProps {
  label?: string | ReactText;
  color?: string | ReactText;
  loading?: boolean;
}

const TableCol: React.FC<ITableColProps> = ({ color, children }) => {
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
    <>
      <TableColContainer fontWeight="normal" color={getColor(color)}>
        {children}
      </TableColContainer>
    </>
  );
};

TableCol.defaultProps = {
  color: colors.gray[900],
};

export default TableCol;
