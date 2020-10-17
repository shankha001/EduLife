import React from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
function Course() {
  const { id } = useParams();
  return (
    <div>
      <Chat />
    </div>
  );
}

export default Course;
