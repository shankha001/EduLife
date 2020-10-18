import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import axios from 'axios';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  TextareaAutosize,
  Tooltip,
  Typography,
} from '@material-ui/core';
function Chat({ user }) {
  const [chats, setChats] = useState({});
  const [message, setMessage] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/chats/${id}/view`)
      .then((res) => setChats(res.data))
      .catch((err) => alert('err'));
  }, [id]);

  const handleClick = () => {
    const newChat = {
      msg: message,
      userName: user.currentUser.name,
      userId: user.currentUser.id,
    };
    axios
      .post(`/chats/${id}/new`, newChat)
      .then((res) => window.location.reload())
      .catch((err) => alert('err'));
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
        variant="h6"
        component="h6"
        gutterBottom
      >
        Study Material :{' '}
        <a target="_blank" href="https://drive.google.com">
          https://drive.google.com/
        </a>
      </Typography>
      <Typography
        style={{ textAlign: 'center', marginTop: '20px' }}
        variant="h6"
        component="h6"
        gutterBottom
      >
        Online Classes Link :{' '}
        <a target="_blank" href="https://meet.google.com">
          https://meet.google.com/
        </a>
        <hr />
      </Typography>

      <Typography
        style={{ textAlign: 'center', marginTop: '20px' }}
        variant="h4"
        component="h4"
        gutterBottom
      >
        Discussion Forum
        <img
          style={{ width: '30px', marginLeft: '10px' }}
          src={require('../Assets/discussion.png')}
          alt="Student"
        />
      </Typography>
      <div style={{ margin: '20px auto', width: '50%' }}>
        <TextareaAutosize
          aria-label="minimum height"
          rowsMin={4}
          style={{ width: '100%' }}
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleClick} style={{ float: 'right  ' }}>
          <SendIcon />
        </Button>
      </div>

      <Paper
        elevation={4}
        style={{ margin: '20px auto', width: '60%', padding: '20px' }}
      >
        <IconButton
          style={{ marginBottom: '20px', width: '100%' }}
          onClick={() => window.location.reload()}
        >
          <RefreshIcon style={{ textAlign: 'right' }} />
        </IconButton>
        {chats.length &&
          chats.map((chat) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <div>
                <Tooltip title={chat.userName}>
                  <Avatar style={{ background: 'orange' }}>
                    {' '}
                    {chat.userName.charAt(0)}
                  </Avatar>
                </Tooltip>
              </div>

              <div
                style={{
                  paddingLeft: '10px',
                  wordWrap: ' break-word',
                  width: '100%',
                }}
              >
                {' '}
                <p
                  style={{
                    marginBottom: '0',
                    wordBreak: 'break-all',
                  }}
                >
                  {chat.msg}
                </p>
                <p style={{ float: 'right', color: 'grey', fontSize: '10px' }}>
                  {' '}
                  {chat.date}
                </p>
              </div>
            </div>
          ))}
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Chat);
