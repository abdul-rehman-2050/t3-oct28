/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import TableHeader from "./table-header";
import TablePaginator from "./table-paginator";
import TableRows from "./table-rows";

export type ColumnDefinitionType = {
  key: string;
  header: string;
  width?: number;
  render?: (record: any) => React.ReactNode;
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
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1); // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  // Use the state and functions returned from useTable to build your UI

  return (
    <div>
      <div>
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
      </div>
      <div>
        <TablePaginator page={1} nPages={nPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default RTable;
