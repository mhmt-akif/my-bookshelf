import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookReducer from './bookSlice';
import alertReducer from './alertSlice';
import authReducer from './authSlice';
import readingLogReducer from './readingLogSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: bookReducer,
    alert: alertReducer,
    auth: authReducer,
    readingLogs: readingLogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
