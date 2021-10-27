const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

function toUTC(date, formatTemplate) {
  dayjs.extend(utc);
  const utcDate = dayjs(date).subtract(dayjs().utcOffset(), 'minutes');

  if (formatTemplate) {
    return utcDate.format(formatTemplate);
  }

  return utcDate;
}

module.exports = {
  toUTC
};
