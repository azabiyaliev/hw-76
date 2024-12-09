import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../../../axiosAPI.ts';


export const fetchPostMessage = createAsyncThunk("postMessage/fetchPostMessage", async (form: IMessage) => {
  await axiosAPI.post("messages", {...form});
});


export const fetchMessages = createAsyncThunk<IResponseMessage[], void>("messages/fetchMessages", async () => {
  const response = await axiosAPI.get<IResponseMessage[]>("messages");
  console.log(response.data);
  return response.data || [];
});