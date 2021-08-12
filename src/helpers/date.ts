import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import toObject from 'dayjs/plugin/toObject';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

function fromTimestampToDate(timestamp: number) {
  dayjs.extend(utc);
  return dayjs(timestamp);
}

function relativeTimeFromNow(timestamp: number) {
  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);

  dayjs.updateLocale('en', {
    relativeTime: {
      future: '%s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    }
  });

  const date = fromTimestampToDate(timestamp);

  return dayjs(date).fromNow();
}

function relativeTimeToX(timestamp: number) {
  const date = fromTimestampToDate(timestamp);
  dayjs.extend(toObject);

  const timeToX = date.diff(dayjs());
  const timeToXObject = dayjs(timeToX).toObject();

  return {
    months: timeToXObject.months,
    days: timeToXObject.date,
    hours: timeToXObject.hours,
    minutes: timeToXObject.minutes
  };
}

export { fromTimestampToDate, relativeTimeFromNow, relativeTimeToX };
