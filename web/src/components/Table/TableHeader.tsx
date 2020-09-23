import React from 'react';

import { TableHeaderContainer } from './styles';

interface ITableHeaderProps {
  columns: { label: string }[];
}

const TableHeader: React.FC<ITableHeaderProps> = ({ columns }) => {
  return (
    <TableHeaderContainer
      as="dt"
      justifyContent="space-between"
      w="100%"
      py={2}
      px={0}
      fontSize="xs"
      fontWeight="medium"
      textTransform="uppercase"
      color="gray.500"
    >
      {columns.map((column) => (
        <div key={column.label}>{column.label}</div>
      ))}
    </TableHeaderContainer>
  );
};

export default TableHeader;
