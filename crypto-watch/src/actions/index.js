import axios from 'axios';

const API_KEY = '0568df9eb81d9a701ef8da2bd3b80246';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

// A convention to hold a variable type and reduce room
// for typos.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},us`; // us is hardcoded etc.
  const request = axios.get(url);

  // the request is a promise - It's stopped until its resolved.
  // Once data has arrived, the middleware creates a new
  // FETCH_WEATHER request to return to the reducers.
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}