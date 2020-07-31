import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import Submitted from "./Submitted";
import axios from "axios";

export class EditUserForm extends Component {
  state = {
    step: 1,
    user: {
      full_name: "",
      email: "",
      username: "",
      location: "",
      bio: "",
      profile_image:
        "https://krino-images.s3.amazonaws.com/apps/photoreview/default.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASFEFGCHVIWFT5YLB%2F20200730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200730T011033Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5432046a066466d33bdf124bbfc592777cd40c2babc2c8a38d3573ef60e0906a",
      user_id: "477c195e-ae69-4442-afea-2518e472503a",
    },
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  componentDidMount() {
    axios
      .get("https://api.krino.fiddlingphotographer.com/user/1/", {})
      .then(function (response) {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  save = () => {
    axios.patch("https://api.krino.fiddlingphotographer.com/user/edit/1/", {
      ...this.state.user,
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
    const {
      step,
      user: {
        full_name,
        email,
        location,
        bio,
        username,
        profile_image,
        user_id,
      },
    } = this.state;
    const values = {
      full_name,
      email,
      location,
      bio,
      username,
      profile_image,
      user_id,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleFile={this.handleFile}
            save={this.save}
          />
        );

      case 2:
        return <Submitted />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default EditUserForm;
