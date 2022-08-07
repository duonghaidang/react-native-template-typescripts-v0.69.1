import axios from 'axios';
import {BASE_URL, VERSION_API} from '~/constants/configs';

const initializeAxios = () => {
  const headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return axios.create({
    baseURL: BASE_URL + '/api/' + VERSION_API,
    timeout: 15000,
    headers,
    validateStatus: () => true,
  });
};
let API = initializeAxios();

//! log URL API

API.interceptors.response.use((response: any) => {
  if (response?.request?.responseURL) {
    console.log(
      'URL API ~>',
      '\u001B[32m' +
        decodeURI(response?.request?.responseURL.replace(BASE_URL, '')),
    );
  } else {
    console.log('\u001B[31m' + 'No response URL for this request.');
  }

  return response;
});

export const setDefaultToken = (token: string) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default API;
