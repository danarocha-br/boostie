import React from 'react';
import _ from 'lodash';

// const TableBody = ({ data, columns }) => {
const TableBody = () => {
  return (
    <dd>
      {/* {data.map((item) => (
        <div key={item.id}>
          {columns.map((column) => (
            <div key={item.id} data-label={column.label}>
              {_.get(item, column.label)}
            </div>
          ))}
        </div>
      ))} */}
    </dd>
  );
};

export default TableBody;
