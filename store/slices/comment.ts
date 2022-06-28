import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { CommentInterface } from '../../interfaces/comment';

const initialState = { comment: '' } as CommentInterface;

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
      saveComment: (
        state: Draft<any>,
        action: PayloadAction<string>
      ) => {
        state.comment = action.payload;
      },
    },
});
  
export const getCommentState = (state: { comment: string }) => state.comment;
export const { saveComment } = commentSlice.actions;
export default commentSlice.reducer;
