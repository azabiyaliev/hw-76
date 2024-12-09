import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../app/hooks.ts';
import { fetchPostMessage } from '../../containers/store/thunks/thunks.ts';


const initialForm = {
  message: "",
  author: "",
};


const AddForm = () => {

  const [form, setForm] = useState<IMessage>({ ...initialForm });

  const dispatch = useAppDispatch();

  const onChangeField = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(fetchPostMessage({...form}));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <Box
        sx={{
          mt: 10,
          py: 3,
          display: 'grid',
          gap: 2,
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <TextField
          sx={{ms: 'auto', maxWidth: 400}}
          type="text"
          id="outlined-basic"
          label="Message"
          name="message"
          value={form.message}
          onChange={onChangeField}
          variant="outlined"
        />
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            width: '100%',
          }}
        >
          <TextField
            sx={{me: 'auto', maxWidth: 400}}
            type="text"
            id="outlined-basic"
            label="Author"
            name="author"
            value={form.author}
            onChange={onChangeField}
            variant="outlined"
          />
          <Button
            type="submit"
            sx={{maxWidth: 400 }}
            color="primary"
            variant="outlined"
          >
            Send
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AddForm;