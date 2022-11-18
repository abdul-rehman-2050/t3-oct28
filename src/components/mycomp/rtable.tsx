/* eslint-disable react/jsx-key */
import React from "react";
import TableHeader from "./table-header";
import TableRows from "./table-rows";

export type ColumnDefinitionType = {
  key: string;
  header: string;
  width?: number;
  render?: (record:any)=>React.ReactNode;
};

export type TableProps<T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType>;
  tableClassNames?: string;
  trClassNames?: string;
  tdClassNames?: string;
  theadClassNames?: string;
  thClassNames?: string;
  thdivClassNames?: string;
};

const RTable = <T, K extends keyof T>({
  data,
  columns,
  tableClassNames,
  trClassNames,
  tdClassNames,
  theadClassNames,
  thClassNames,
  thdivClassNames,
}: TableProps<T>): JSX.Element => {
  // Use the state and functions returned from useTable to build your UI

  return (
    <table className={tableClassNames}>
      <TableHeader
        columns={columns}
        theadClassNames={theadClassNames}
        thClassNames={thClassNames}
        trClassNames={trClassNames}
        thdivClassNames={thdivClassNames}
      />
      <TableRows
        data={data}
        columns={columns}
        trClassNames={trClassNames}
        tdClassNames={tdClassNames}
      />
    </table>
  );
};

export default RTable;
