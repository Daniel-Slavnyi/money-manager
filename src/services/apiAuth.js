import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const registerUser = async body => {
  try {
    const { data } = await axios.post('/api/auth/sign-up', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async body => {
  try {
    const { data } = await axios.post('/api/auth/sign-in', body);
    return data;
  } catch (error) {
    return error;
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await axios.delete('/api/auth/sign-out');
    return data;
  } catch (error) {
    return error;
  }
};
