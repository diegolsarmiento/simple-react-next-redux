import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { CommentInterface } from '../../interfaces/comment';
import { CommentsInterface } from '../../interfaces/comments';

const initialComments: CommentsInterface = { comments: []};
  
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: initialComments,
    reducers: {
      saveComment: (
        state: Draft<any>,
        action: PayloadAction<CommentInterface>
      ) => {
        state.comment = action.payload;
      },
      fetchComments: (
        state: Draft<any>,
        action: PayloadAction<any>
      ) => {
        let comments = action.payload.data?.map((comment: CommentInterface) => {
            comment.name
        });
        state.comments = comments;
      },
    },
});
  
export const getCommentsState = (state: { comments: CommentInterface[] }) => state.comments;
export const { saveComment, fetchComments } = commentsSlice.actions;
export default commentsSlice.reducer;
