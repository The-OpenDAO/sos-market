import classNames from 'classnames';
import { Market } from 'models/market';

import { FavoriteIcon, NetworkCommunicationIcon } from 'assets/icons';

import { useFavoriteMarkets } from 'hooks';

import { Button } from '../Button';

type MarketFooterActionsProps = {
  market: Market;
};

function MarketFooterActions({ market }: MarketFooterActionsProps) {
  const { favoriteMarkets, addFavoriteMarket, removeFavoriteMarket } =
    useFavoriteMarkets();

  const isFavoriteMarket = favoriteMarkets.includes(market.id);

  return (
    <div className="pm-c-market-footer__actions">
      <a
        href={`https://twitter.com/intent/tweet?text=Check%20out%20Polkamarkets%20at%20app.polkamarkets.com/markets/${market.slug}%20%F0%9F%94%A5%F0%9F%92%AF%20%23polkamarkets`}
        target="_blank"
        rel="noreferrer"
      >
        <NetworkCommunicationIcon className="pm-c-market-footer__actions-share--default" />
      </a>
      <Button
        color="noborder"
        onClick={
          isFavoriteMarket
            ? () => removeFavoriteMarket(market.id)
            : () => addFavoriteMarket(market.id)
        }
      >
        <FavoriteIcon
          className={classNames({
            'pm-c-market-footer__actions-favorite--default': !isFavoriteMarket,
            'pm-c-market-footer__actions-favorite--active': isFavoriteMarket
          })}
        />
      </Button>
    </div>
  );
}

export default MarketFooterActions;
