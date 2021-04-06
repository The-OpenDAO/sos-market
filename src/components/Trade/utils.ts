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
    {
      key: 'prediction',
      title: 'Prediction',
      value: selectedPredictionObj?.name || ''
    },
    {
      key: 'pricePerFraction',
      title: 'Price per fraction',
      value: `${selectedPredictionObj?.pricePerFraction || 0} DOT`
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
      value: `${totalStake} DOT`
    }
  ];
}

export default formatMiniTableItems;
