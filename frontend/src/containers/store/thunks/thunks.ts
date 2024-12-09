import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../../../axiosAPI.ts';


export const fetchPostMessage = createAsyncThunk("postMessage/fetchPostMessage", async (form: IMessage) => {
  await axiosAPI.post("messages", {...form});
});