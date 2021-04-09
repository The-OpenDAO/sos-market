import dayjs from 'dayjs';

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function generateChartRandomData(reverse = false) {
  let currentIndex = 0;

  let values = [3, 4, 4.5, 6, 8, 8.1, 10, 11, 12, 13.5, 14].map(
    x => x * generateRandomNumberBetween(2, 12)
  );

  if (reverse) {
    values = values
      .reverse()
      .map(x => x / generateRandomNumberBetween(2, values.length));
  }

  const data = values.map(value => {
    const currentTime = dayjs().add(currentIndex, 'minute');

    const currentEvent = {
      x: currentTime,
      y: value / 10
    };
    currentIndex += 1;

    return currentEvent;
  });

  return data;
}

export { generateRandomNumberBetween, generateChartRandomData };
