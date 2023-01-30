import { createSlice } from '@reduxjs/toolkit';
import { refreshUser } from 'redux/auth/auth-operation';
import {
  getCategories,
  newTransaction,
  refreshTransactions,
  transactionSummary,
} from './transaction-operation';

const pending = state => {
  state.isLoading = true;
};

const fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.total = action.payload.balanceAfter;
  state.items = [...state.items, action.payload];
  console.log(action.payload);
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  total: null,
  summaryItem: {},
  error: null,
  isLoading: null,
  categories: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(newTransaction.pending, pending)
      .addCase(newTransaction.fulfilled, fulfilled)
      .addCase(newTransaction.rejected, rejected)

      .addCase(refreshTransactions.fulfilled, (state, action) => {
        state.items = action.payload;
        console.log(action.payload);
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      //Maryna Summary transactions
      .addCase(transactionSummary.pending, pending)
      .addCase(transactionSummary.rejected, rejected)
      .addCase(transactionSummary.fulfilled, (state, action) => {
        state.summaryItem = action.payload;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.total = action.payload.balance;
      }),
});

export const transactionReducer = transactionSlice.reducer;
