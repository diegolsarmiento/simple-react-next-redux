import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth';
import { commentSlice } from './slices/comment';
import { commentsSlice } from './slices/comments';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    comment: commentSlice.reducer,
    comments: commentsSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>;

export default store;