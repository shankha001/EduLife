import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import jwt_decode from 'jwt-decode';
import Register from './Components/Register';
import { setCurrentUser } from './redux/user/user.actions';
import store from './redux/store';
import Login from './Components/Login';
import Dashboard from './Pages/Dashboard';
import { connect } from 'react-redux';
import Course from './Components/Course';
import ViewAnnouncement from './Components/ViewAnnouncement';
import Resources from './Components/Resources';

function App({ user }) {
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            user.currentUser ? <Redirect to="/dashboard" /> : <Home />
          }
        />
        <Route
          exact
          path="/register"
          render={() =>
            user.currentUser ? <Redirect to="/dashboard" /> : <Register />
          }
        />
        <Route
          exact
          path="/Login"
          render={() =>
            user.currentUser ? <Redirect to="/dashboard" /> : <Login />
          }
        />
        {user.currentUser ? (
          <Route path="/dashboard/course/:id" component={Course} />
        ) : (
          <Home />
        )}
        {user.currentUser ? (
          <Route path="/dashboard/announcement" component={ViewAnnouncement} />
        ) : (
          <Home />
        )}
        {user.currentUser ? (
          <Route path="/dashboard/resources" component={Resources} />
        ) : (
          <Home />
        )}

        {user.currentUser ? <Dashboard /> : <Redirect to="/" />}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(App);
