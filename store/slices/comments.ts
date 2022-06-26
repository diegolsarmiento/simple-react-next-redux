import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { CommentsInterface } from '../../interfaces/comments';
import { CommentInterface } from '../../interfaces/comment';

const initialState = { comments: [{ comment: 'N/A' }] } as CommentsInterface;

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      fetchComments: (
        state: Draft<any>,
        action: PayloadAction<CommentsInterface>
      ) => {
        let commts = action.payload.data?.map((comment: CommentInterface) => {
            comment.name
        });
        state.comments = commts;
      },
    },
});
  
export const getCommentsState = (state: { comments: CommentInterface[] }) => state.comments;
export const { fetchComments } = commentsSlice.actions;
export default commentsSlice.reducer;
