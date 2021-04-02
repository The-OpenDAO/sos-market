function formatMiniTableItems(
  predictions,
  selectedPredictionId,
  fractionsBought,
  currentROI,
  totalStake
) {
  const selectedPredictionObj = predictions.find(
    prediction => prediction.id === selectedPredictionId
  );

  return [
    { name: 'Prediction', value: selectedPredictionObj?.name || '' },
    {
      name: 'Price per fraction',
      value: `${selectedPredictionObj?.pricePerFraction || 0} DOT`
    },
    {
      name: 'Fractions bought',
      value: fractionsBought
    },
    {
      name: 'Current ROI',
      value: `${currentROI}%`
    },
    {
      name: 'Total stake',
      value: `${totalStake} DOT`
    }
  ];
}

export default formatMiniTableItems;
