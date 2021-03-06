import axios from 'axios';
import jwt_decode from 'jwt-decode';
import store from './redux/store';
import { setCurrentUser } from './redux/user/user.actions';

// @route POST auth/users/register
// @desc Register User
export const register = (user) => {
  axios
    .post('/auth/users/register', user)
    .then((res) => alert('Success'))
    .catch((err) => alert(err.response.data.error));
};

// // @route POST auth/users/login
// // @desc Login User
export const login = (user) => {
  axios
    .post('/auth/users/login', user)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
    })
    .catch((err) => alert(err.response));
};

// @desc Logout User
export const logoutUser = () => {
  localStorage.removeItem('jwtToken');
  store.dispatch(setCurrentUser(null));
};
