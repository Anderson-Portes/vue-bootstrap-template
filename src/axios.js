import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://locahost/'
});

axiosClient.interceptors.request.use(config => {
  return config;
})

axiosClient.interceptors.response.use(response => response, error => {
  if(error.response.status === 401) {
    //Do Something
  }
  throw error;
});

export default axiosClient;