import React from 'react';
import { Divider, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <List
      component="nav"
      style={{
        width: '180px',
        borderRight: '1px solid lightgrey',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <ListItem component={Link} to="/dashboard" button>
        All Courses
      </ListItem>
      <ListItem component={Link} to="/dashboard/announcement" button>
        Favourite Courses
      </ListItem>
      <Divider />

      <ListItem component={Link} to="/dashboard/announcement" button>
        Annoucements
      </ListItem>
      <Divider />
      <ListItem component={Link} to="/dashboard/resources" button>
        Resources
      </ListItem>
    </List>
  );
}

export default Sidebar;
