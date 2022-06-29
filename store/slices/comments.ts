import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    reducers: {},
    extraReducers: (builder) => {
      /*
        You can also add builder.addCase(fetchContentApi.pending...
        and builder.addCase(fetchContentApi.rejected...
      */
      builder.addCase(fetchContentApi.fulfilled, (state, action) => {
      /*
        Map it and  Add comments to the state
      */
      state.comments = action.payload;
      })
    },
});
  
export const getCommentsState = (state: { comments: CommentInterface[] }) => state.comments;
export default commentsSlice.reducer;
