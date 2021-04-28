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

const PortfolioLiquidityTable = ({ rows, headers }: MarketTableProps) => {
  const dispatch = useAppDispatch();
  const { ticker } = useCurrency();

  async function handleClaimLiquidity(marketId) {
    const beproService = new BeproService();

    await beproService.claimLiquidity(marketId);

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
          ({ market, value, shares, poolShare, feesEarned, result }) => (
            <tr className="market-table__row" key={market.id}>
              <td id="market" className="market-table__row-item">
                <img
                  className="market-table__row-item__image"
                  src={market.imageUrl}
                  alt={market.id}
                />
                {market.title}
              </td>
              <td id="shares" className="market-table__row-item">
                {roundNumber(shares, 3)}
              </td>
              <td id="value" className="market-table__row-item">
                <div className="market-table__row-item__group">
                  {`${roundNumber(value.value, 3)} ${ticker}`}
                  <Text
                    className={`market-table__row-item__change--${value.change.type}`}
                    as="span"
                    scale="caption"
                    fontWeight="bold"
                  >
                    {value.change.type === 'up' ? (
                      <CaretUpIcon />
                    ) : (
                      <CaretDownIcon />
                    )}
                    {`${roundNumber(value.change.value * 100, 2)}%`}
                  </Text>
                </div>
              </td>
              <td id="poolShare" className="market-table__row-item">
                {`${roundNumber(poolShare * 100, 3)}%`}
              </td>
              <td id="feesEarned" className="market-table__row-item">
                <Text scale="caption" color="warning">
                  {feesEarned}
                </Text>
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
                    onClick={() => handleClaimLiquidity(market.id)}
                  >
                    Withdraw
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
                      Withdrawn
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

PortfolioLiquidityTable.displayName = 'Portfolio liquidity table';

export default PortfolioLiquidityTable;
