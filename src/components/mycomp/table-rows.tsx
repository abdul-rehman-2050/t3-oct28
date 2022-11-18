import { ColumnDefinitionType } from "./rtable";

type TableRowsProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
  }
  
  const style = {
    border: '1px solid black'
  }

  
  
  const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {
    type ObjectKey = keyof typeof columns;
    const rows = data.map((row, index) => {
      return (
        <tr key={`row-${index}`}>
          {columns.map((column, index2) => {
            return (
              <td key={`cell-${index2}`} style={style}>
                {row[column.key]}
              </td>
            );
          }
          )}
        </tr>
      );
    });
  
    return (
      <tbody>
        {rows}
      </tbody>
    );
  };
  
  export default TableRows;