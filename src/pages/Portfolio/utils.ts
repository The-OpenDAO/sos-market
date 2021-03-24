import dayjs from 'dayjs';
import reverse from 'lodash/reverse';

function generateRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

function generateChartRandomData() {
  let currentIndex = 0;

  const values = [
    3,
    3.3,
    4,
    4.5,
    5,
    6,
    6.5,
    6.5,
    6.7,
    8,
    8.1,
    8.15,
    8.2,
    9,
    10,
    11,
    11.2,
    12,
    12.2,
    13,
    13.5,
    14
  ];

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
