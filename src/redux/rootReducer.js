import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import transactionReducer from './transaction/transaction-slice';
import userReducer from './user/user-slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  transaction: transactionReducer,
});
