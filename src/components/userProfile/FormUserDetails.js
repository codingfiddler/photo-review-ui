import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  submit = () => {
    this.props.save();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange, save } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <br />
          <h3>Edit User Details</h3>

          <TextField
            placeholder="Enter your full name "
            label="Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Hobbyist or Professional? "
            label="Photographer Type"
            onChange={handleChange("photographerType")}
            defaultValue={values.photographerType}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter your location "
            label="Location"
            onChange={handleChange("location")}
            defaultValue={values.location}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter your email "
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            style={{ backgroundColor: "#32e0c4", width: "100%" }}
            color="primary"
            variant="contained"
            onClick={() => this.submit()}
          >
            Save Changes
          </Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
