import { configureStore } from '@reduxjs/toolkit'
import commentSlice from './commentSlice';
import commentsSlice from './commentsSlice';

export  const store = configureStore({
  reducer: {
    comments:commentsSlice,
    comment:commentSlice
  },
});