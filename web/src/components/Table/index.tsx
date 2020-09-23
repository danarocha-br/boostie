import React from 'react';

import { TableContainer } from './styles';

const Table: React.FC = ({ children }) => {
  return (
    <TableContainer
      as="dl"
      flexDirection="column"
      justifyContent="space-between"
      w="100%"
      mb={5}
    >
      {children}
    </TableContainer>
  );
};

export default Table;
