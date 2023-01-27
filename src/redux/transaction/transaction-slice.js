import { createSlice } from '@reduxjs/toolkit';
import { newTransaction, refreshTransactions } from './transaction-operation';

const pending = state => {
  state.isLoading = true;
};

const fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
   state.items = [...state.items, action.payload ]
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  error: null,
  isLoading: null,
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
      }),
});

export const transactionReducer = transactionSlice.reducer;
