import { Link } from 'react-router-dom';

import { roundNumber } from 'helpers/math';
import { login, fetchAditionalData } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { CaretDownIcon, CaretUpIcon } from 'assets/icons';

import { useAppDispatch } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import { Button } from '../Button';
import Text from '../Text';

type MarketTableProps = {
  rows: any[];
  headers: any[];
};

const PortfolioMarketTable = ({ rows, headers }: MarketTableProps) => {
  const dispatch = useAppDispatch();
  const { ticker } = useCurrency();

  async function handleClaimWinnings(marketId) {
    const beproService = new BeproService();

    await beproService.claimWinnings(marketId);

    // updating wallet
    await login(dispatch);
    await fetchAditionalData(dispatch);
  }

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
                  {`${roundNumber(profit.value, 3)} ${ticker}`}
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
              <td id="shares" className="market-table__row-item">
                {roundNumber(shares, 3)}
              </td>
              <td id="value" className="market-table__row-item">
                {`${roundNumber(value, 3)} ${ticker}`}
              </td>
              <td id="maxPayout" className="market-table__row-item">
                {`${roundNumber(maxPayout, 3)} ${ticker}`}
              </td>
              <td id="trade" className="market-table__row-item">
                {result.type === 'pending' ? (
                  <Link to={`/markets/${market.slug}`}>
                    <Button size="sm" variant="dark" color="default" fullWidth>
                      Trade
                    </Button>
                  </Link>
                ) : null}
                {result.type === 'awaiting_claim' ? (
                  <Button
                    size="sm"
                    variant="normal"
                    color="primary"
                    fullWidth
                    onClick={() => handleClaimWinnings(market.id)}
                  >
                    Claim Winnings
                  </Button>
                ) : null}
                {result.type === 'awaiting_resolution' ? (
                  <Button
                    size="sm"
                    variant="dark"
                    color="primary"
                    fullWidth
                    disabled
                  >
                    <Text scale="caption" fontWeight="semibold" color="primary">
                      Awaiting Resolution
                    </Text>
                  </Button>
                ) : null}
                {result.type === 'claimed' ? (
                  <Button
                    size="sm"
                    variant="dark"
                    color="primary"
                    fullWidth
                    disabled
                  >
                    <Text scale="caption" fontWeight="semibold" color="primary">
                      Winnings Claimed
                    </Text>
                  </Button>
                ) : null}
                {result.type === 'lost' ? (
                  <Button
                    size="sm"
                    variant="dark"
                    color="danger"
                    fullWidth
                    disabled
                  >
                    <Text
                      scale="caption"
                      fontWeight="semibold"
                      color="light-gray"
                    >
                      Lost
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

PortfolioMarketTable.displayName = 'Portfolio Market table';

export default PortfolioMarketTable;
