import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});