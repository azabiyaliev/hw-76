import AddForm from '../../components/AddForm/AddForm.tsx';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { resMsgList } from './chatSlice.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../store/thunks/thunks.ts';


const Chat = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(resMsgList);

  console.log(messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Container>
      <Grid container gridRow={2} spacing={4}>
        <Grid spacing={2} size={4}>
          <AddForm />
        </Grid>
        <Box
          sx={{
            width: "50%",
            overflowY: "auto",
            height: 400,
            p: 4,
            mt: 10,
          }}
        >
            {messages.map((message) => (
              <>
                <Card sx={{ maxWidth: 345, mb: 2, boxShadow: 4, mx: "auto"}}>
                  <CardContent sx={{ padding: '10px', gridRow: '1rem, 1rem' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {message.author}
                    </Typography>
                    <Typography>
                      {message.datetime}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {message.message}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            ))}
        </Box>

      </Grid>
    </Container>

  );
};

export default Chat;