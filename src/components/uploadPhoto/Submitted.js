import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'

export class Submitted extends Component {
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
    return (
      <>
        <br /><br />
        <Container maxWidth="sm">
          <h1 align="center">Thank You For Your Submission</h1>
          <Link href="/explore">
            <Button
              style={{ backgroundColor: "#32e0c4", width: "100%" }}
              color="primary"
              variant="contained"
            >Go to explore page</Button>
          </Link>
        </Container>
      </>
    );
  }
}

export default Submitted;