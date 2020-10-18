import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
function Chat() {
  const [chats, setChats] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/chats/${id}/view`)
      .then((res) => setChats(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return <div>{chats.length && chats.map((chat) => <p>{chat.msg}</p>)}</div>;
}

export default Chat;
