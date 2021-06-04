/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import classnames from 'classnames';
import { roundNumber } from 'helpers/math';
import { login, fetchAditionalData } from 'redux/ducks/bepro';
import { BeproService } from 'services';

import { ArrowDownIcon, ArrowUpIcon } from 'assets/icons';

import { useAppDispatch } from 'hooks';
import useCurrency from 'hooks/useCurrency';

import Badge from '../Badge';
import { Button } from '../Button';
import Pill from '../Pill';
import Text from '../Text';

type MarketTableProps = {
  rows: any[];
  headers: any[];
};

const PortfolioMarketTable = ({ rows, headers }: MarketTableProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { ticker, symbol } = useCurrency();

  const [isLoadingClaimWinnings, setIsLoadingClaimWinnings] = useState({});

  function handleChangeIsLoading(id: string | number, isLoading: boolean) {
    setIsLoadingClaimWinnings({ ...isLoadingClaimWinnings, [id]: isLoading });
  }

  async function handleClaimWinnings(marketId) {
    const beproService = new BeproService();

    handleChangeIsLoading(marketId, true);

    try {
      await beproService.claimWinnings(marketId);

      // updating wallet
      await login(dispatch);
      await fetchAditionalData(dispatch);

      handleChangeIsLoading(marketId, false);
    } catch (error) {
      handleChangeIsLoading(marketId, false);
    }
  }

  function redirectTo(marketSlug) {
    return history.push(`/markets/${marketSlug}`);
  }

  return (
    <table className="pm-c-table">
      <tbody>
        <tr className="pm-c-table__header">
          {headers?.map(header => (
            <th
              className={classnames({
                'pm-c-table__header-item': true,
                [`pm-c-table__item--${header.align}`]: true
              })}
              id={header.key}
              key={header.key}
              scope="col"
            >
              {header.title}
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
            <tr className="pm-c-table__row" key={`${market.id}-${outcome.id}`}>
              <td
                id="market"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--left': true
                })}
                onClick={() => redirectTo(market.slug)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '1.6rem',
                    alignItems: 'center'
                  }}
                >
                  <img
                    src={market.imageUrl}
                    alt={market.id}
                    height={32}
                    width={32}
                    style={{ borderRadius: '50%' }}
                  />
                  {market.title}
                </div>
              </td>
              <td
                id="outcome"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                <Badge
                  color={
                    market.outcomes[0].id === outcome.id ? 'purple' : 'pink'
                  }
                  label={`${outcome.title}`}
                  style={{ display: 'inline-flex' }}
                />
              </td>
              <td
                id="price"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                <div className="market-table__row-item__group">
                  <Text
                    as="span"
                    scale="caption"
                    fontWeight="semibold"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {`${roundNumber(price.value, 3)} `}
                    <Text as="strong" scale="caption" fontWeight="semibold">
                      {` ${symbol || ticker}`}
                    </Text>
                  </Text>
                  <Text
                    className={`market-table__row-item__change--${price.change.type}`}
                    as="span"
                    scale="caption"
                    fontWeight="bold"
                  >
                    {price.change.type === 'up' ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    )}
                    {`${price.change.value}%`}
                  </Text>
                </div>
              </td>
              <td
                id="profit"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                <div className="market-table__row-item__group">
                  <Text
                    as="span"
                    scale="caption"
                    fontWeight="semibold"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {`${roundNumber(profit.value, 3)} `}
                    <Text as="strong" scale="caption" fontWeight="semibold">
                      {` ${symbol || ticker}`}
                    </Text>
                  </Text>
                  <Text
                    className={`market-table__row-item__change--${profit.change.type}`}
                    as="span"
                    scale="caption"
                    fontWeight="bold"
                  >
                    {profit.change.type === 'up' ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    )}
                    {`${profit.change.value}%`}
                  </Text>
                </div>
              </td>
              <td
                id="shares"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--center': true
                })}
              >
                {roundNumber(shares, 3)}
              </td>
              <td
                id="value"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                <Text
                  as="span"
                  scale="caption"
                  fontWeight="semibold"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {`${roundNumber(value, 3)} `}
                  <Text as="strong" scale="caption" fontWeight="semibold">
                    {` ${symbol || ticker}`}
                  </Text>
                </Text>
              </td>
              <td
                id="maxPayout"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                <Text
                  as="span"
                  scale="caption"
                  fontWeight="semibold"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {`${roundNumber(maxPayout, 3)} `}
                  <Text as="strong" scale="caption" fontWeight="semibold">
                    {` ${symbol || ticker}`}
                  </Text>
                </Text>
              </td>
              <td
                id="trade"
                className={classnames({
                  'pm-c-table__row-item': true,
                  'pm-c-table__item--right': true
                })}
              >
                {result.type === 'pending' ? (
                  <Link to={`/markets/${market.slug}`}>
                    <Button
                      size="sm"
                      variant="dark"
                      color="default"
                      fullWidth
                      onClick={() => redirectTo(market.slug)}
                    >
                      Trade
                    </Button>
                  </Link>
                ) : null}
                {result.type === 'awaiting_claim' ? (
                  <Button
                    size="sm"
                    variant="normal"
                    color="success"
                    fullWidth
                    onClick={() => handleClaimWinnings(market.id)}
                    loading={isLoadingClaimWinnings[market.id] || false}
                  >
                    Claim Winnings
                  </Button>
                ) : null}
                {result.type === 'awaiting_resolution' ? (
                  <Pill variant="subtle" color="warning">
                    Awaiting Resolution
                  </Pill>
                ) : null}
                {result.type === 'claimed' ? (
                  <Pill variant="subtle" color="success">
                    Winnings Claimed
                  </Pill>
                ) : null}
                {result.type === 'lost' ? (
                  <Pill variant="subtle" color="danger">
                    Lost
                  </Pill>
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
