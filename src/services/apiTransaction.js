import { backend } from './apiAuth';

export const getAllTransactions = async () => {
  try {
    const { data } = await backend.get('/transactions');
    return data;
  } catch (error) {
    return error;
  }
};

export const createNewTransaction = async transferOptions => {
  try {
    const { data } = await backend.post('/transactions', transferOptions);
    return data;
  } catch (error) {
    return error;
  }
};

export const getTransactionCategories = async () => {
  try {
    const { data } = await backend.get('/transaction-categories');
    return data;
  } catch (error) {
    return error;
  }
};