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
        href={`https://twitter.com/intent/tweet?text=I%20just%20made%20a%20prediction%20on%20SOSMarket!%20🔥💯%0D%0DCheck%20it%20out%20at%20sosmarket.io/markets/${market.slug}%20%23SOSMarket`}
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
