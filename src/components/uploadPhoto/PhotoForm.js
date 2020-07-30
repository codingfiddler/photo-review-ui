import React, { Component } from 'react';
import FormPhotoDetails from './FormPhotoDetails';
import FormCameraDetails from './FormCameraDetails';
import Confirm from './Confirm';
import Submitted from './Submitted';

export class PhotoForm extends Component {
  state = {
    step: 1,
    title: "",
    location_taken: "",
    taken_date: "",
    software_used: "",
    camera_used: "",
    camera_lens: "",
    aperture: "",
    shutter_speed: "",
    iso: "",
    email: "",
    photo: "https://i0.wp.com/theturf.com.au/wp-content/uploads/2016/05/placeholder.png?ssl=1"
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleFile = fileUploaded => {
    const photo = URL.createObjectURL(fileUploaded)
    this.setState({
      selectedFile: fileUploaded, photo
    })
  };

  render() {
    const { step } = this.state;
    const {
      title,
      location_taken,
      taken_date,
      software_used,
      camera_used,
      camera_lens,
      aperture,
      shutter_speed,
      iso,
      photo,
    } = this.state;
    const values = { title, location_taken, taken_date, software_used, camera_used, camera_lens, aperture, shutter_speed, iso, photo };

    switch (step) {
      case 1:
        return (
          <FormPhotoDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleFile={this.handleFile}
            photo={photo}
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
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default PhotoForm;