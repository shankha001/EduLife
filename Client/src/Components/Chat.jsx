import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

import axios from 'axios';
import { Button, Link, TextareaAutosize, Typography } from '@material-ui/core';
function Chat() {
  const [chats, setChats] = useState({});
  const [message, setMessage] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/chats/${id}/view`)
      .then((res) => setChats(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = () => {
    const newChat = {
      msg: message,
    };
    axios
      .post(`/chats/${id}/new`, newChat)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        style={{ textAlign: 'center', marginTop: '20px' }}
        variant="h5"
        component="h5"
        gutterBottom
      >
        Online Classes Link :{' '}
        <a target="_blank" href="https://meet.google.com">
          https://meet.google.com/
        </a>
      </Typography>
      <Typography
        style={{ textAlign: 'center', marginTop: '20px' }}
        variant="h5"
        component="h5"
        gutterBottom
      >
        Study Material :{' '}
        <a target="_blank" href="https://drive.google.com">
          https://drive.google.com/
        </a>
        <hr />
      </Typography>
      <Typography
        style={{ textAlign: 'center', marginTop: '20px' }}
        variant="h3"
        component="h3"
        gutterBottom
      >
        Discussion Forum
      </Typography>
      <div style={{ margin: '20px auto', width: '50%' }}>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={4}
          style={{ width: '100%' }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleClick} style={{ float: 'right  ' }}>
          <SendIcon />
        </Button>
      </div>
      <div style={{ margin: '20px auto', width: '50%' }}>
        {chats.length && chats.map((chat) => <p>{chat.msg}</p>)}
      </div>
    </div>
  );
}

export default Chat;
