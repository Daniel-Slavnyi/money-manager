import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { transactionReducer } from './transaction/transaction-slice';

export const store = configureStore({
  reducer: rootReducer
});
