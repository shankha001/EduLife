import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCourse() {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = useState({
    cname: '',
    description: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [name]: value }));
    console.log(details);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Course
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Create New Course</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the Required Details*</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              name="cname"
              label="Course Name"
              type="text"
              fullWidth
              required
              onChange={handleChange}
              value={details.cname}
            />

            <TextField
              id="outlined-multiline-static"
              label="Description"
              name="description"
              multiline
              rows={4}
              fullWidth
              required
              onChange={handleChange}
              details={details.description}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add Course
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
