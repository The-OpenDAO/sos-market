import { roundNumber } from 'helpers/math';
import { Market, Outcome } from 'models/market';
import { TradeDetails } from 'redux/ducks/trade';

function formatMiniTableItems(
  predictions,
  selectedPredictionId,
  selectedMarketId,
  shares,
  price,
  maxROI,
  totalStake,
  maxStake
) {
  const selectedPredictionObj = predictions.find(
    prediction =>
      prediction.id === selectedPredictionId &&
      prediction.marketId === selectedMarketId
  );

  return [
    {
      key: 'prediction',
      title: 'Prediction',
      value: selectedPredictionObj?.title || ''
    },
    {
      key: 'pricePerFraction',
      title: 'Price per share',
      value: `${roundNumber(price || selectedPredictionObj?.price || 0, 3)} ETH`
    },
    {
      key: 'shares',
      title: 'Est. Shares bought',
      value: roundNumber(shares, 3)
    },
    {
      key: 'roi',
      title: 'Maximum ROI',
      value: `${roundNumber(maxROI, 3)}%`
    },
    {
      key: 'stake',
      title: 'Total stake',
      value: `${roundNumber(totalStake, 3)} ETH`
    }
  ];
}

function calculateSharesBought(
  market: Market,
  outcome: Outcome,
  ethAmount: number
): TradeDetails {
  // TODO: move formulas to beprojs
  const newOutcomeShares =
    market.shares ** 2 / (market.shares ** 2 / outcome.shares + ethAmount);

  const shares = market.shares - newOutcomeShares + ethAmount || 0;
  const price = ethAmount / shares || 0;
  const maxROI = shares > 0 ? (1 / price - 1) * 100 : 0;
  const totalStake = ethAmount;
  const maxStake = shares - ethAmount;

  return {
    price,
    shares,
    maxROI,
    totalStake,
    maxStake
  };
}

function calculateEthAmountSold(market, outcome, shares): TradeDetails {
  // TODO: move formulas to beprojs

  return {
    price: 0,
    shares: 0,
    maxROI: 0,
    totalStake: 0,
    maxStake: 0
  };
}

export { formatMiniTableItems, calculateSharesBought, calculateEthAmountSold };
