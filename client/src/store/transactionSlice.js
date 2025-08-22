import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchTransactions = createAsyncThunk('transactions/fetch', async () => {
  const { data } = await api.get('/transactions');
  return data;
});

export const addTransaction = createAsyncThunk('transactions/add', async (tx) => {
  const { data } = await api.post('/transactions', tx);
  return data;
});

const slice = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => action.payload);
    builder.addCase(addTransaction.fulfilled, (state, action) => { state.push(action.payload); });
  }
});

export default slice.reducer;
