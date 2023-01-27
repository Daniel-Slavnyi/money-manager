import axios from 'axios';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

export const getAllTransactions = async () => {
  try {
    const { data } = await axios.get('/api/transactions');
    return data;
  } catch (error) {
    return error;
  }
};

export const createNewTransaction = async transferOptions => {
    try {
      const { data } = await axios.post('/api/transactions', transferOptions);
      return data;
    } catch (error) {
      return error;
    }
  };

  