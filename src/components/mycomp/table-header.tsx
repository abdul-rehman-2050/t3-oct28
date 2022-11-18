import { ColumnDefinitionType } from "./rtable";

type TableHeaderProps = {
  columns: Array<ColumnDefinitionType>;
  theadClassNames?: string;
  thClassNames?: string;
  thdivClassNames?: string;
  trClassNames?: string;
};

const TableHeader = ({
  columns,
  theadClassNames,
  thClassNames,
  thdivClassNames,
  trClassNames,
}: TableHeaderProps): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} className={thClassNames}>
        <div className={thdivClassNames}>{column.header}</div>
      </th>
    );
  });

  return (
    <thead className={theadClassNames}>
      <tr className={trClassNames}>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
