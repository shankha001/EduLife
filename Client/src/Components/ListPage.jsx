import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper } from '@material-ui/core';
function ListPage() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('/uploads/add').then((res) => setImages(res.data.images));
  }, []);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Grid container spacing={3}>
      {images.map((file) => (
        <Grid item xs>
          <Paper elevation={5} style={{ textAlign: 'center', margin: '20px' }}>
            {/* {console.log(file.filename)} */}

            <img
              src={'../uploads/image/' + file.filename}
              alt="list-image"
              className="ListImage__Image"
              style={{ width: '300px', height: '300px' }}
            />

            <p className="ListImage__Caption">{file.caption}</p>
            <p className="ListImage__Date">{file.createdAt}</p>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ListPage;
