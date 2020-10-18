import React from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';

function Course() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Course;
