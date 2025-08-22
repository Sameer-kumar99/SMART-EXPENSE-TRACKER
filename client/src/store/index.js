import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import transactionReducer from './transactionSlice';
import householdReducer from './householdSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    household: householdReducer,
  },
});
