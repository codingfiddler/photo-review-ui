import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUploader from './FileUploader';
import Box from '@material-ui/core/Box';

class FormPhotoDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box display="flex" flexDirection="row" width="100%" style={{ paddingTop: "50px" }}>

          <Box p={1} width="100%" style={{ paddingRight: "30px" }}>
            <h3>Please Upload a Photo</h3>

            <img src={this.props.previewUrl} width="100%" height="auto" />
            <FileUploader handleFile={this.props.handleFile} />
          </Box>

          <hr style={{
            border: "none",
            borderLeft: "1px solid hsla(200, 10%, 50%,100)",
            height: "55vh",
            width: "1px"
          }} />

          <Box p={1} width="100%" style={{ paddingLeft: "30px" }}>
            <h3>Please Enter Photo Details</h3>

            <TextField
              placeholder="Enter the Title"
              label="Title"
              onChange={handleChange('title')}
              defaultValue={values.title}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter the location"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              type="date"
              placeholder="Enter the date "
              label="Date Taken"
              onChange={handleChange('dateTaken')}
              defaultValue={values.dateTaken}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter the software used"
              label="Editing Software"
              onChange={handleChange('softwareUsed')}
              defaultValue={values.softwareUsed}
              margin="normal"
              fullWidth
            />
            <br />

            <br />
            <Button
              style={{ backgroundColor: "#32e0c4", width: "100%" }}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default FormPhotoDetails;