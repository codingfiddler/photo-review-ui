import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import axios from "axios"
export class Confirm extends Component {

  continue = e => {
    e.preventDefault();
    console.log(this.props.values)
    axios
      .post("https://api.krino.fiddlingphotographer.com/users/upload/", this.props.values)
      .then(response => {
        console.log(response.data)
        this.props.nextStep();
      })
      .catch(error => {
        console.log(error)
      })
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const {
      values: { title, location_taken, taken_date, software_used, camera_used, camera_lens, aperture, shutter_speed, iso }
    } = this.props;

    return (
      <>
        <Container maxWidth="sm">
          <br /><br />
          <h3>Please Confirm Your Information</h3>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead style={{ backgroundColor: "#092532" }}>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold', color: '#32e0c4' }}>Information</TableCell>
                  <TableCell align="right" style={{ fontWeight: 'bold', color: '#32e0c4' }}>Your Entry</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">{title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">{location_taken}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">{taken_date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Editing Software</TableCell>
                  <TableCell align="right">{software_used}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Camera Model</TableCell>
                  <TableCell align="right">{camera_used}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Camera Lens</TableCell>
                  <TableCell align="right">{camera_lens}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aperture</TableCell>
                  <TableCell align="right">{aperture}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shutter Speed</TableCell>
                  <TableCell align="right">{shutter_speed}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ISO</TableCell>
                  <TableCell align="right">{iso}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
          >Confirm & Continue</Button>
        </Container>
      </>
    );
  }
}

export default Confirm;