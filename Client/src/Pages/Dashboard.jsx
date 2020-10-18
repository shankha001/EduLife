import React from 'react';
import { connect } from 'react-redux';

import Parent from './Parent';
import Student from './Student';
import Teacher from './Teacher';

import Sidebar from '../Components/Sidebar';
const compsad = (role) => {
  return (
    <div>
      {role === 'student' ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <Student />
        </div>
      ) : role === 'teacher' ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Sidebar />
          <Teacher />
        </div>
      ) : role === 'parent' ? (
        <Parent />
      ) : null}
    </div>
  );
};
function Dashboard({ user }) {
  return <div>{user.currentUser && compsad(user.currentUser.role)}</div>;
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Dashboard);
