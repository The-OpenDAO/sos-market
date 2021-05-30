import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

function fromTimestampToDate(timestamp: number) {
  dayjs.extend(utc);
  return dayjs(timestamp);
}

function relativeTimeFromNow(timestamp: number) {
  dayjs.extend(relativeTime);
  const date = fromTimestampToDate(timestamp);

  return dayjs(date).fromNow();
}

export { fromTimestampToDate, relativeTimeFromNow };
