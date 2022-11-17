import { configureStore } from '@reduxjs/toolkit'
import commentsSlice from './commentsSlice';

export  const store = configureStore({
  reducer: {
    comments:commentsSlice
  },
});