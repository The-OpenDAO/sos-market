function formatMiniTableItems(
  predictions,
  selectedPredictionId,
  selectedMarketId,
  fractionsBought,
  currentROI,
  totalStake
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
      title: 'Price per fraction',
      value: `${selectedPredictionObj?.price || 0} ETH`
    },
    {
      key: 'fractionsBought',
      title: 'Fractions bought',
      value: fractionsBought
    },
    {
      key: 'roi',
      title: 'Current ROI',
      value: `${currentROI}%`
    },
    {
      key: 'stake',
      title: 'Total stake',
      value: `${totalStake} ETH`
    }
  ];
}

export default formatMiniTableItems;
