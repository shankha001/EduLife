import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { connect } from 'react-redux';
function AddAnnouncement({ user }) {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addAnnouncement = {
      name: details.cname,
      description: details.description,
    };
    // @route POST /courses/create
    // @desc Create Course
    axios
      .post('/announcements/create', addAnnouncement)
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((err) => {
        throw err;
      });
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
        Add Announcement
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Announcement</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter Announcement Details*</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              name="cname"
              label="Announcement Title"
              type="text"
              fullWidth
              required
              onChange={handleChange}
              value={details.cname}
            />

            <TextField
              id="outlined-multiline-static"
              label="Announcement Details"
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
              Add Announcement
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(AddAnnouncement);
