import React from 'react';

import { TableGroupRowContainer } from './styles';

const TableGroupRow: React.FC = ({ children }) => {
  return (
    <TableGroupRowContainer
      justifyContent="space-between"
      w="100%"
      cursor="pointer"
      marginBottom={1}
    >
      {children}
    </TableGroupRowContainer>
  );
};

export default TableGroupRow;
