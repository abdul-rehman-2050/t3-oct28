import { ColumnDefinitionType } from "./rtable";

type TableRowsProps<T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType>;
  trClassNames? : string;
  tdClassNames? : string;
};

const style = {
  border: "1px solid black",
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
  trClassNames,
  tdClassNames,
}: TableRowsProps<T>): JSX.Element => {
  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`} className={trClassNames}>
        {columns.map((column, index2) => {
          if (column.render) {
            return column.render;
          } else {
            return (
              
              <td key={`cell-${index2}`} className={`${tdClassNames} justify-center`}>
                {(row as any)[column.key]}
              </td>
            );
          }
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
