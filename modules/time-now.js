import { DateTime } from './scripts/luxon.min.js';

export default () => {
  const currentTime = DateTime.now();
  const formatt = DateTime.DATETIME_MED_WITH_SECONDS;
  return currentTime.toLocaleString(formatt);
};