import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead style={{backgroundColor: "#092532"}}>
                  <TableRow>
                    <TableCell style={{fontWeight: 'bold', color: '#32e0c4'}}>Information</TableCell>
                    <TableCell align="right" style={{fontWeight: 'bold', color: '#32e0c4'}}>Your Entry</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow> 
                      <TableCell>Title</TableCell>
                      <TableCell align="right">{title}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Location</TableCell>
                      <TableCell align="right">{location}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Date</TableCell>
                      <TableCell align="right">{dateTaken}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Editing Software</TableCell>
                      <TableCell align="right">{softwareUsed}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Camera Model</TableCell>
                      <TableCell align="right">{cameraModel}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Camera Lens</TableCell>
                      <TableCell align="right">{cameraLens}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Aperture</TableCell>
                      <TableCell align="right">{aperture}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>Shutter Speed</TableCell>
                      <TableCell align="right">{shutterSpeed}</TableCell>
                    </TableRow>
                    <TableRow> 
                      <TableCell>ISO</TableCell>
                      <TableCell align="right">{iso}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br/>
            
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