import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import { AlertMini } from '../Alert';

type ItemAlign = 'left' | 'center' | 'right';

type TableColumn = {
  /**
   * Unique key of this column
   */
  key: string;
  /**
   * Title of this column
   */
  title: string;
  /**
   * Align of this column
   */
  align: ItemAlign;
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
  isLoadingData?: boolean;
  emptyDataDescription?: string;
};

/**
 * A table that displays rows of data
 */
function Table({
  columns,
  rows,
  isLoadingData = false,
  emptyDataDescription = 'No data to show.'
}: TableProps) {
  return (
    <>
      <table className="pm-c-table">
        <thead>
          <tr className="pm-c-table__header">
            {columns?.map(column => (
              <th
                className={classnames({
                  'pm-c-table__header-item': true,
                  [`pm-c-table__item--${column.align}`]: true
                })}
                id={column.key}
                key={column.key}
                scope="col"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map(row => (
            <tr className="pm-c-table__row" key={row.key}>
              {Object.entries(row)
                .filter(([key]) => key !== 'key')
                .map(([key, item]) => (
                  <td
                    className={classnames({
                      'pm-c-table__row-item': true,
                      [`pm-c-table__item--${item.align}`]: true
                    })}
                    id={key}
                    key={key}
                  >
                    {item.value}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>

      {isEmpty(rows) && isLoadingData ? (
        <div className="pm-c-table__loading">
          <div className="spinner--primary" />
        </div>
      ) : null}

      {isEmpty(rows) && !isLoadingData ? (
        <div className="pm-c-table__empty">
          <AlertMini
            styles="outline"
            variant="information"
            description={emptyDataDescription}
          />
        </div>
      ) : null}
    </>
  );
}

Table.displayName = 'Table';

export default Table;
