import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function fromTimestampToDate(timestamp: number) {
  return dayjs(timestamp);
}

function relativeTimeFromNow(timestamp: number) {
  dayjs.extend(relativeTime);
  const date = fromTimestampToDate(timestamp);

  return dayjs(date).fromNow();
}

export { fromTimestampToDate, relativeTimeFromNow };
