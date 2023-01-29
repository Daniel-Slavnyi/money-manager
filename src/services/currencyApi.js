import axios from 'axios';

export async function privatbankApi() {
  try {
    const { data } = await axios.get(
      'https://api.monobank.ua/bank/currency'
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}