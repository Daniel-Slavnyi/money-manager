import axios from 'axios';
import { Notify } from 'notiflix';

export const backend = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const registerUser = async body => {
  try {
    const { data } = await backend.post('/auth/sign-up', body);
    return data;
  } catch (error) {
    Notify.failure('Something Went Wrong');

    return error;
  }
};

export const loginUser = async body => {
  try {
    const { data } = await backend.post('/auth/sign-in', body);
    return data;
  } catch (error) {
    Notify.failure('Something Went Wrong');

    return error;
  }
};

export const logoutUser = async () => {
  try {
    const { data } = await backend.delete('/auth/sign-out');
    return data;
  } catch (error) {
    Notify.failure('Something Went Wrong');

    return error;
  }
};
