import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

function fromTimestampToDate(timestamp: number) {
  dayjs.extend(utc);
  return dayjs(timestamp);
}

function fromTimestampToCustomFormatDate(timestamp: number, format: string) {
  dayjs.extend(utc);
  return dayjs(timestamp).format(format);
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
  dayjs.extend(duration);

  const timeToX = date.diff(dayjs());
  const timeToXDuration = dayjs.duration(timeToX);

  return {
    months: timeToXDuration.months(),
    days: timeToXDuration.days(),
    hours: timeToXDuration.hours(),
    minutes: timeToXDuration.minutes()
  };
}

export {
  fromTimestampToDate,
  fromTimestampToCustomFormatDate,
  relativeTimeFromNow,
  relativeTimeToX
};
