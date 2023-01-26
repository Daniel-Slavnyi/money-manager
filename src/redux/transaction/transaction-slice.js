import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
});

export default transactionSlice.reducer;
