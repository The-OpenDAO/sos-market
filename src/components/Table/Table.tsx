type TableColumn = {
  /**
   * Unique key of this column
   */
  key: string;
  /**
   * Title of this column
   */
  title: string;
};

type TableRow = {
  /**
   * Unique key of this row
   */
  key: string;
  [key: string]: any;
};

type TableProps = {
  /**
   * Columns of table
   */
  columns: TableColumn[];
  /**
   * Array of rows to be displayed
   */
  rows: TableRow[];
};

/**
 * A table displays rows of data
 */
const Table = ({ columns, rows }: TableProps) => {
  return (
    <table className="table">
      <tr className="table__header">
        {columns?.map(column => (
          <th className="table__header-item" id={column.key} key={column.key}>
            {column.title}
          </th>
        ))}
      </tr>
      {rows?.map(row => (
        <tr className="table__row" key={row.key}>
          {Object.entries(row)
            .filter(([key]) => key !== 'key')
            .map(([key, value]) => (
              <td className="table__row-item" id={key} key={key}>
                {value}
              </td>
            ))}
        </tr>
      ))}
    </table>
  );
};

Table.displayName = 'Table';

export default Table;
