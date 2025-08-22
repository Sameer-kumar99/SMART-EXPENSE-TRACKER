import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchTotals = createAsyncThunk('household/totals', async () => {
  const { data } = await api.get('/household/totals');
  return data.total;
});

const slice = createSlice({
  name: 'household',
  initialState: { total: 0 },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTotals.fulfilled, (state, action) => {
      state.total = action.payload;
    });
  }
});

export default slice.reducer;
