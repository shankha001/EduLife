import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import jwt_decode from 'jwt-decode';
import Register from './Components/Register';
import { setCurrentUser } from './redux/user/user.actions';
import store from './redux/store';
import Login from './Components/Login';

function App() {
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
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
