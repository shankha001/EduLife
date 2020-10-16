import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
    textAlign: 'center',
  },
}));

export default function TeacherForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <h2>Enter Course Details..</h2>
        <TextField label="Course Name" />
        <TextField label="Course Description" />
        <Button
          style={{ marginTop: '10px' }}
          color="primary"
          variant="outlined"
          type="button"
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
}
