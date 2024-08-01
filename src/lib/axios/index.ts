import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://www.albuquerqueincode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const axiosFormData = Axios.create({
  baseURL: 'https://www.albuquerqueincode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
  },
});

// export const axios = Axios.create({
//   baseURL: 'http://localhost',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
// });

// export const axiosFormData = Axios.create({
//   baseURL: 'http://localhost',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Accept': 'application/json',
//   },
// });
