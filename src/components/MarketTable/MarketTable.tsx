import { roundNumber } from 'helpers/math';

import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import useCurrency from 'hooks/useCurrency';

import { Button } from '../Button';
import Text from '../Text';

type MarketTableProps = {
  rows: any[];
  headers: any[];
};

const MarketTable = ({ rows, headers }: MarketTableProps) => {
  const { ticker } = useCurrency();
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
            market,
            outcome,
            price,
            profit,
            value,
            shares,
            maxPayout,
            result
          }) => (
            <tr
              className="market-table__row"
              key={`${market.id}-${outcome.id}`}
            >
              <td id="market" className="market-table__row-item">
                <img
                  className="market-table__row-item__image"
                  src={market.imageUrl}
                  alt={market.id}
                />
                {market.title}
              </td>
              <td id="outcome" className="market-table__row-item">
                {outcome.title}
              </td>
              <td id="price" className="market-table__row-item">
                <div className="market-table__row-item__group">
                  {`${roundNumber(price.value, 3)} ${ticker}`}
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
              <td id="value" className="market-table__row-item">
                {`${roundNumber(value, 3)} ${ticker}`}
              </td>
              <td id="shares" className="market-table__row-item">
                {roundNumber(shares, 3)}
              </td>
              <td id="maxPayout" className="market-table__row-item">
                {`${roundNumber(maxPayout, 3)} ${ticker}`}
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
