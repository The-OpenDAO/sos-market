function floorNumber(value: number, decimals: number) {
  return Math.floor(value * 10 ** decimals) / 10 ** decimals;
}

function roundNumber(value: number, decimals: number) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}

// eslint-disable-next-line import/prefer-default-export
export { roundNumber, floorNumber };
