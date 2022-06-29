import { createSlice, Draft, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CommentsInterface } from '../../interfaces/comments';
import { CommentInterface } from '../../interfaces/comment';

const initialState = { comments: [{ name: 'N/A', index: 0}] } as CommentsInterface;

/*
// EXAMPLE with params
const fetchContentApi = createAsyncThunk(
  'comments/fetchByCode',
  async (codeId: string = 'comments', thunkAPI) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/${codeId}`, {
      signal: thunkAPI.signal,
    });
    return await response.json()
  }
);
*/

export const fetchContentApi = createAsyncThunk(
  'comments/fetchByCode',
  async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/comments`);
    return await response.json();
  }
);

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
      saveComment: (
        state: Draft<any>,
        action: PayloadAction<string>
      ) => {
        state.comments = [...state.comments, {name: action.payload}];
      },
    },
    extraReducers: (builder) => {
      /*
        You can also add builder.addCase(fetchContentApi.pending...
        and builder.addCase(fetchContentApi.rejected...
      */
      builder.addCase(fetchContentApi.fulfilled, (state, action) => {
      /*
        // In case you want to replace the array use
        state.comments = action.payload;
       */
      state.comments = [...state.comments, ...action.payload];
      })
    },
});
  
export const getCommentsState = (state: { comments: CommentInterface[] }) => state.comments;
export const { saveComment } = commentsSlice.actions;
export default commentsSlice.reducer;
