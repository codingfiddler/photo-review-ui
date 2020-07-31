import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export class Submitted extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <br />
          <h1 align="center">Thank You For Your Submission</h1>
          <Link href="/explore">
            <Button
              style={{ backgroundColor: "#32e0c4", width: "100%" }}
              color="primary"
              variant="contained"
            >
              Go to explore page
            </Button>
          </Link>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Submitted;
