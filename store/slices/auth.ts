import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/auth';

const initialState = { auth: false } as AuthState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      changeAuth: (
        state: Draft<any>,
        action: PayloadAction<typeof initialState>
      ) => {
        state.auth = action.payload;
      }
    }
});

export const getAuthState = (state: { auth: boolean }) => state.auth;
export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
