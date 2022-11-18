/* eslint-disable react/jsx-key */
import React from 'react'
import TableHeader from './table-header';
import TableRows from './table-rows';


export type ColumnDefinitionType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
}

export type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}




const RTable = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
    // Use the state and functions returned from useTable to build your UI
    
  
    return (
        <table >
          <TableHeader columns={columns} />
          <TableRows
            data={data}
            columns={columns}
          />
        </table>
      );
  }
  

export default RTable