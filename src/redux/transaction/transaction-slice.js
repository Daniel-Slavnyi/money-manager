import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser } from 'redux/auth/auth-operation';
import {
  getCategories,
  newTransaction,
  refreshTransactions,
  transactionSummary,
  updateTransaction,
  deleteTransaction,
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
      })
      .addCase(updateTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items[index] = payload;
        state.isLoading = false;
      })
      .addCase(updateTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logIn.fulfilled, (state,{payload}) => {
        console.log(payload);
    state.total = payload.user.balance;
      })
      .addCase(logOut.fulfilled, (state) => {
        return initialState;
      }) 
});

export const transactionReducer = transactionSlice.reducer;
