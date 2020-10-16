import React from 'react';
import { connect } from 'react-redux';

import Parent from './Parent';
import Student from './Student';
import Teacher from './Teacher';

const compsad = (role) => {
  return (
    <div>
      {role === 'student' ? (
        <Student />
      ) : role === 'teacher' ? (
        <Teacher />
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
