import dayjs from 'dayjs';

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function generateChartRandomData() {
  let currentIndex = 0;

  const values = [3, 4, 4.5, 6, 8, 8.1, 10, 11, 12, 13.5, 14];

  const data = values.map(value => {
    const currentTime = dayjs().add(currentIndex, 'minute');

    const currentEvent = {
      x: currentTime,
      y: value
    };
    currentIndex += 1;

    return currentEvent;
  });

  return data;
}

export { generateRandomNumberBetween, generateChartRandomData };
