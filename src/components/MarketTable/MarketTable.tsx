import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import { Button } from '../Button';
import Text from '../Text';

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
  result: {
    type: string;
  };
};

type MarketTableProps = {
  rows: Row[];
};

const MarketTable = ({ rows }: MarketTableProps) => {
  return (
    <table className="market-table">
      <tbody>
        <tr className="market-table__header">
          {headers?.map(header => (
            <th className="market-table__header-item" key={header}>
              {header}
            </th>
          ))}
        </tr>
        {rows?.map(
          ({
            id,
            imageUrl,
            description,
            price,
            profit,
            fractions,
            maxPayout,
            result
          }) => (
            <tr className="market-table__row" key={id}>
              <td id="market" className="market-table__row-item">
                <img
                  className="market-table__row-item__image"
                  src={imageUrl}
                  alt={id}
                />
                {description}
              </td>
              <td id="price" className="market-table__row-item">
                <div className="market-table__row-item__group">
                  {price.value}
                  <Text
                    className={`market-table__row-item__change--${price.change.type}`}
                    as="span"
                    scale="caption"
                    fontWeight="bold"
                  >
                    {price.change.type === 'up' ? (
                      <CaretUpIcon />
                    ) : (
                      <CaretDownIcon />
                    )}
                    {`${price.change.value}%`}
                  </Text>
                </div>
              </td>
              <td id="profit" className="market-table__row-item">
                <div className="market-table__row-item__group">
                  {profit.value}
                  <Text
                    className={`market-table__row-item__change--${profit.change.type}`}
                    as="span"
                    scale="caption"
                    fontWeight="bold"
                  >
                    {profit.change.type === 'up' ? (
                      <CaretUpIcon />
                    ) : (
                      <CaretDownIcon />
                    )}
                    {`${profit.change.value}%`}
                  </Text>
                </div>
              </td>
              <td id="fractions" className="market-table__row-item">
                {fractions}
              </td>
              <td id="maxPayout" className="market-table__row-item">
                {maxPayout}
              </td>
              <td id="trade" className="market-table__row-item">
                {result.type === 'pending' ? (
                  <Button size="sm" variant="dark" color="default" fullWidth>
                    Trade
                  </Button>
                ) : null}
                {result.type === 'won' ? (
                  <Button size="sm" variant="normal" color="primary" fullWidth>
                    Claim Winnings
                  </Button>
                ) : null}
                {result.type === 'lost' ? (
                  <Button size="sm" variant="dark" color="primary" fullWidth>
                    <Text scale="caption" fontWeight="semibold" color="primary">
                      Claim Winnings
                    </Text>
                  </Button>
                ) : null}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

MarketTable.displayName = 'Market table';

export default MarketTable;
