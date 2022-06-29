import { configureStore } from '@reduxjs/toolkit';
import { commentsSlice } from './slices/comments';

const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>;

export default store;