import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../helper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

function Navbar({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            to="/"
            color="inherit"
          >
            EduLife
          </Typography>

          {user.currentUser ? (
            <div>
              <IconButton component={Link} to="/" color="inherit">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit" onClick={logoutUser}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          ) : (
            <div>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>

              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Navbar);
