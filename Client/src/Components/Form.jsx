import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { register } from '../helper';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Form(props) {
  const classes = useStyles();
  const { type } = props;
  const [details, setDetails] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setDetails((prevState) => ({ ...prevState, [name]: value }));
    console.log(details);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      alert('helllo');
    } else {
      let fullname = details.fname + details.lname;
      if (type === 'parentReg') {
        const newUser = {
          name: fullname,
          email: details.email,
          password: details.password,
        };
        register(newUser);
      } else if (type === 'studentReg') {
        const newUser = {
          name: fullname,
          email: details.email,
          password: details.password,
        };
        register(newUser);
      } else if (type === 'teacherReg') {
        const newUser = {
          name: fullname,
          email: details.email,
          password: details.password,
        };
        register(newUser);
      }
    }

    //login(newUser);
  };
  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          {type === 'login' ? null : (
            <React.Fragment>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleChange}
                  value={details.fname}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  onChange={handleChange}
                  value={details.lname}
                />
              </Grid>
            </React.Fragment>
          )}

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              value={details.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={details.password}
            />
          </Grid>
        </Grid>

        {type === 'login' ? (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        )}
      </form>
    </React.Fragment>
  );
}

export default Form;
