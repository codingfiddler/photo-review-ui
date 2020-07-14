import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { 
      values: { title, description, location, dateTaken, softwareUsed, cameraModel, cameraLens, aperture, shutterSpeed, iso }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <br/>
            <h3>Please Confirm Your Information</h3>
            <List>
              <ListItem>
                <ListItemText primary="Title" secondary={title} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location" secondary={location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date Taken" secondary={dateTaken} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Editing Software" secondary={softwareUsed} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Camera Model" secondary={cameraModel} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Camera Lens" secondary={cameraLens} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aperture" secondary={aperture} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Shutter Speed" secondary={shutterSpeed} />
              </ListItem>
              <ListItem>
                <ListItemText primary="ISO" secondary={iso} />
              </ListItem>
            </List>
            <br />

            <Button
              style={{width: "50%"}}
              color="default"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              style={{backgroundColor: "#32e0c4", width: "50%"}}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;