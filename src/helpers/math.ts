function floorNumber(value: number, decimals: number) {
  return Math.floor(value * 10 ** decimals) / 10 ** decimals;
}

function roundNumber(value: number, decimals: number) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}

function formatNumberToString(number: number | string) {
  return `${parseFloat(`${number}`).toFixed(0)}`.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,'
  );
}

export { roundNumber, floorNumber, formatNumberToString };
