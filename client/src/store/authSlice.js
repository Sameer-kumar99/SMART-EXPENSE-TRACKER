import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

const token = localStorage.getItem('token');

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  return data;
});

export const registerUser = createAsyncThunk('auth/register', async (info) => {
  const { data } = await api.post('/auth/register', info);
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: token || null },
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
