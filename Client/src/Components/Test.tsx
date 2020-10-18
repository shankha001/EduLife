import React, { PureComponent } from 'react';
import axios from 'axios';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, Input } from '@material-ui/core';
interface UploadState {
  recentImage: any;
  caption: string;
  uploadedImageUrl: string;
  uploadedImage: any;
}

class UploadPage extends PureComponent<{}, UploadState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      recentImage: {},
      caption: '',
      uploadedImageUrl: '',
      uploadedImage: {},
    };
  }

  componentDidMount = () => {
    this.fetchRecent();
  };

  fetchRecent = () => {};

  uploadImage = () => {
    if (!this.state.caption.trim() || !this.state.uploadedImage.name) {
      return alert('Caption or file is missing');
    }

    let formData = new FormData();
    formData.append('caption', this.state.caption);
    formData.append('file', this.state.uploadedImage);

    axios
      .post('/uploads/add', formData)
      .then((response) => {
        response.data.success
          ? alert('File successfully uploaded')
          : alert('File already exists');
        this.fetchRecent();
      })
      .catch((err) => alert('Error: ' + err));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div
          className="Upload__InputSection"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Input
            type="text"
            className="Upload__Caption"
            placeholder="Enter caption..."
            onChange={(event) => this.setState({ caption: event.target.value })}
            value={this.state.caption}
            style={{ marginBottom: '20px' }}
          />
          <input
            type="file"
            className="Upload__Input"
            onChange={(event: any) => {
              this.setState({
                uploadedImageUrl: URL.createObjectURL(event.target.files[0]),
                uploadedImage: event.target.files[0],
              });
            }}
            style={{ marginBottom: '20px' }}
          />
        </div>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={this.uploadImage}
        >
          Upload
        </Button>
      </div>
    );
  }
}

export default UploadPage;
