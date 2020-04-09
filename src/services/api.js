import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

async function getToken() {
  const user = JSON.parse(await AsyncStorage.getItem('USER_DATA'));
  return user.token;
}

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const noAuthApi = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export { api, noAuthApi };
