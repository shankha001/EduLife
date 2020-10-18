import { Typography } from '@material-ui/core';
import React from 'react';
import ListPage from './ListPage';
import Sidebar from './Sidebar';
function Resources() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <div>
        <Typography
          style={{ textAlign: 'center', marginTop: '20px' }}
          variant="h2"
          component="h2"
          gutterBottom
        >
          Resources
        </Typography>
        <ListPage />
      </div>
    </div>
  );
}

export default Resources;
