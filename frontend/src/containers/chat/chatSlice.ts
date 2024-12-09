import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { fetchPostMessage } from '../store/thunks/thunks.ts';

interface dishState {
  object: IMessage[];
  isFetching: boolean;
  error: boolean;
}

const initialState: dishState = {
  object: [],
  isFetching: false,
  error: false,
};

export const messageList = (state: RootState) => state.messages.object;

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers:{
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchPostMessage.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchPostMessage.fulfilled, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchPostMessage.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })},
});

export const messagesReducer = messagesSlice.reducer;
export const {} = messagesSlice.actions;
