import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const registerUser = body => {
  try {
    const { data } = axios.post('/api/auth/sign-up', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = body => {
  try {
    const { data } = axios.post('/api/auth/sign-in', body);
    return data;
  } catch (error) {
    return error;
  }
};
