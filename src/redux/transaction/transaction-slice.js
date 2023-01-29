import { createSlice } from '@reduxjs/toolkit';
<<<<<<< Updated upstream
import { getCategories, newTransaction, refreshTransactions } from './transaction-operation';
=======
import {
  newTransaction,
  refreshTransactions,
  transactionSummary,
} from './transaction-operation';
>>>>>>> Stashed changes

const pending = state => {
  state.isLoading = true;
};

const fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, action.payload];
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  summaryItem: {},
  error: null,
  isLoading: null,
  categories: []
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
      })
<<<<<<< Updated upstream

      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
=======
      //Maryna Summary transactions
      .addCase(transactionSummary.pending, pending)
      .addCase(transactionSummary.rejected, rejected)
      .addCase(transactionSummary.fulfilled, (state, action) => {
        state.summaryItem = action.payload;
        state.error = null;
      }),
>>>>>>> Stashed changes
});

export const transactionReducer = transactionSlice.reducer;
