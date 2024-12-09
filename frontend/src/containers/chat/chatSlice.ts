import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { fetchMessages, fetchPostMessage } from '../store/thunks/thunks.ts';

interface dishState {
  formMessage: IMessage[];
  responseMessage: IResponseMessage[];
  isFetching: boolean;
  error: boolean;
}

const initialState: dishState = {
  formMessage: [],
  responseMessage: [],
  isFetching: false,
  error: false,
};

export const messageList = (state: RootState) => state.messages.formMessage;
export const resMsgList = (state: RootState) => state.messages.responseMessage;

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
      })
      .addCase(fetchMessages.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchMessages.fulfilled, (state, action: PayloadAction<IResponseMessage[]>) => {
        state.isFetching = true;
        state.responseMessage = action.payload;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
  },

});

export const messagesReducer = messagesSlice.reducer;
export const {} = messagesSlice.actions;
