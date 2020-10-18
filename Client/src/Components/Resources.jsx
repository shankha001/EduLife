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
          style={{ textAlign: 'center', marginTop: '20px' }}
          variant="h4"
          component="h4"
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
