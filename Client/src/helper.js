import axios from 'axios';

// @route POST auth/users/register
// @desc Register User
export const register = (user) => {
  axios
    .post('/auth/users/register', user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

// // @route POST auth/users/login
// // @desc Login User
