import React, { Component } from "react";
import FormPhotoDetails from "./FormPhotoDetails";
import FormCameraDetails from "./FormCameraDetails";
import Confirm from "./Confirm";
import Submitted from "./Submitted";

export class PhotoForm extends Component {
  state = {
    step: 1,
    title: "",
    //description: "",
    location: "",
    dateTaken: "",
    softwareUsed: "",
    cameraModel: "",
    cameraLens: "",
    aperture: "",
    shutterSpeed: "",
    iso: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleFile = (fileUploaded) => {
    this.setState({
      selectedFile: fileUploaded,
    });
  };

  render() {
    const { step } = this.state;
    const {
      title,
      description,
      location,
      dateTaken,
      softwareUsed,
      cameraModel,
      cameraLens,
      aperture,
      shutterSpeed,
      iso,
    } = this.state;
    const values = {
      title,
      description,
      location,
      dateTaken,
      softwareUsed,
      cameraModel,
      cameraLens,
      aperture,
      shutterSpeed,
      iso,
    };

    switch (step) {
      case 1:
        return (
          <FormPhotoDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleFile={this.handleFile}
          />
        );
      case 2:
        return (
          <FormCameraDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Submitted />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default PhotoForm;
