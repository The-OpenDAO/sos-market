import classNames from 'classnames';
import { Market } from 'models/market';

import { FavoriteIcon } from 'assets/icons';

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
