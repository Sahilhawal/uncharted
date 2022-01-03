import { handleResponse } from '../../helpers/handleResponse';
import { config } from '../../constants/app.constants';

export const placesServices = {
  getPlaces,
};

function getPlaces(data) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  console.log('config file', config);
  return fetch(`${config.API_URL}/places`, requestOptions)
    .then(handleResponse)
    .then((response) => {
      return response;
    });
}
