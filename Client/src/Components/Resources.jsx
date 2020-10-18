import { Typography } from '@material-ui/core';
import React from 'react';
import ListPage from './ListPage';
import Sidebar from './Sidebar';
function Resources() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div style={{ width: '100%' }}>
        <Typography
          style={{ textAlign: 'center', marginTop: '40px' }}
          variant="h4"
          component="h4"
          gutterBottom
        >
          Resources
          <img
            style={{ width: '30px', marginLeft: '10px' }}
            src={require('../Assets/studying.png')}
            alt="Student"
          />
        </Typography>
        <ListPage />
      </div>
    </div>
  );
}

export default Resources;
