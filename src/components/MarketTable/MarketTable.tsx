import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import Button from 'components/Button';
import Text from 'components/Text';

const headers = [
  'Market',
  'Price',
  'Profit/Loss',
  'Fractions',
  'Max. Payout',
  ''
];

type Row = {
  id: string;
  imageUrl: string;
  description: string;
  price: {
    value: number | string;
    change: {
      type: string;
      value: number | string;
    };
  };
  profit: {
    value: number | string;
    change: {
      type: string;
      value: number | string;
    };
  };
  fractions: number | string;
  maxPayout: number | string;
};

type MarketTableProps = {
  rows: Row[];
};

const MarketTable = ({ rows }: MarketTableProps) => {
  return (
    <table className="market-table">
      <tr className="market-table__header">
        {headers?.map(header => (
          <th className="market-table__header-item" key={header}>
            {header}
          </th>
        ))}
      </tr>
      {rows?.map(row => (
        <tr className="market-table__row" key={row.id}>
          <td id="market" className="market-table__row-item">
            <img
              className="market-table__row-item__image"
              src={row.imageUrl}
              alt={row.id}
            />
            {row.description}
          </td>
          <td id="price" className="market-table__row-item">
            <div className="market-table__row-item__group">
              {row.price.value}
              <Text
                className={`market-table__row-item__change--${row.price.change.type}`}
                as="span"
                scale="caption"
                fontWeight="bold"
              >
                {row.price.change.type === 'up' ? (
                  <CaretUpIcon />
                ) : (
                  <CaretDownIcon />
                )}
                {`${row.price.change.value}%`}
              </Text>
            </div>
          </td>
          <td id="profit" className="market-table__row-item">
            <div className="market-table__row-item__group">
              {row.profit.value}
              <Text
                className={`market-table__row-item__change--${row.profit.change.type}`}
                as="span"
                scale="caption"
                fontWeight="bold"
              >
                {row.profit.change.type === 'up' ? (
                  <CaretUpIcon />
                ) : (
                  <CaretDownIcon />
                )}
                {`${row.profit.change.value}%`}
              </Text>
            </div>
          </td>
          <td id="fractions" className="market-table__row-item">
            {row.fractions}
          </td>
          <td id="maxPayout" className="market-table__row-item">
            {row.maxPayout}
          </td>
          <td id="trade" className="market-table__row-item">
            <Button variant="primary" size="sm">
              Trade
            </Button>
          </td>
        </tr>
      ))}
    </table>
  );
};

MarketTable.displayName = 'Market table';

export default MarketTable;
