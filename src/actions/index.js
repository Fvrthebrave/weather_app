import Axios from 'axios';

const API_KEY = 'f6bfc267568c34d86df1c70ea9f364fa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Create constant variable to prevent bugs.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},us`;
    const REQUEST = Axios.get(URL);
    
    return {
        type: FETCH_WEATHER,
        payload: REQUEST 
        //Promise will stop the action and send out another action with the data attached.
    };
}