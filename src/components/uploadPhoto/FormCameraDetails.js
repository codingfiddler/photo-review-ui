import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'

export class FormCameraDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <br /><br />
        <Container maxWidth="sm">
          <h3>Please Enter Camera Details (optional)</h3>
          <TextField
            placeholder="Enter the camera model"
            label="Camera Model"
            onChange={handleChange('cameraModel')}
            defaultValue={values.cameraModel}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter the camera lens"
            label="Camera Lens"
            onChange={handleChange('cameraLens')}
            defaultValue={values.cameraLens}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter the Apertureo"
            label="Aperture"
            onChange={handleChange('aperture')}
            defaultValue={values.aperture}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter the Shutter Speed"
            label="Shutter Speed"
            onChange={handleChange('shutterSpeed')}
            defaultValue={values.shutterSpeed}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter the ISO"
            label="ISO"
            onChange={handleChange('iso')}
            defaultValue={values.iso}
            margin="normal"
            fullWidth
          />
          <br />

          <Button
            style={{ width: "50%" }}
            color="default"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            style={{ backgroundColor: "#32e0c4", width: "50%" }}
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue</Button>
        </Container>
      </>
    );
  }
}

export default FormCameraDetails;