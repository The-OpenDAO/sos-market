type TableProps = {
  headers: string[];
  rows: string[][];
};

const Table = ({ headers, rows }: TableProps) => {
  return (
    <table className="table">
      <tr className="table__header">
        {headers?.map(header => (
          <th className="table__header-item" key={header}>
            {header}
          </th>
        ))}
      </tr>
      {rows?.map(row => (
        <tr className="table__row" key={row[0]}>
          {row?.map(item => (
            <td className="table__row-item" key={item}>
              {item}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

Table.displayName = 'Table';

export default Table;
