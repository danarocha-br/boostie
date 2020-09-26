import React from 'react';

import { TableRowContainer } from './styles';

const TableRow: React.FC = ({ children }) => {
  return (
    <TableRowContainer
      as="dt"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      fontSize="md"
    >
      {children}
    </TableRowContainer>
  );
};

export default TableRow;
