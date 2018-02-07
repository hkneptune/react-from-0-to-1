import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';
import axios from 'axios'

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    console.log(apiUrl);

    dispatch(fetchWeatherStarted())

    return axios.get(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      dispatch(fetchWeatherSuccess(response.data.weatherinfo));
    }).catch((error) => {
      console.log(error);
      dispatch(fetchWeatherFailure(error));
    })
  };
}


