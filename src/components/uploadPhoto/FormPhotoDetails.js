import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUploader from './FileUploader';


class FormPhotoDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

   render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <br/>
            <FileUploader handleFile={this.props.handleFile} />
            <h3>Please Enter Photo Details</h3>

            <TextField
              placeholder="Enter the Title"
              label="Title"
              onChange={handleChange('title')}
              defaultValue={values.title}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              placeholder="Enter the location"
              label="Location"
              onChange={handleChange('location')}
              defaultValue={values.location}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              type="date"
              placeholder="Enter the date "
              label="Date Taken"
              onChange={handleChange('dateTaken')}
              defaultValue={values.dateTaken}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              placeholder="Enter the software used"
              label="Editing Software"
              onChange={handleChange('softwareUsed')}
              defaultValue={values.softwareUsed}
              margin="normal"
              fullWidth
            />
            <br/>
              
            
                                    
            <br/>
            <Button
              style={{backgroundColor: "#32e0c4", width: "100%"}}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPhotoDetails;