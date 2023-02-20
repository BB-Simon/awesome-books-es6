import { DateTime } from './scripts/luxon.min.js';

class Time {
  static now = () => {
    const currentTime = DateTime.now();
    const formatt = DateTime.DATETIME_MED_WITH_SECONDS;
    return currentTime.toLocaleString(formatt);
  }
}

export default Time;