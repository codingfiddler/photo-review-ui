import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import UserNavBar from "../components/userProfile/UserNavBar";
import UploadProfilePhoto from "../components/userProfile/UploadProfilePhoto";
import UserBio from "../components/userProfile/UserBio";
import UserPhotos from "../components/userProfile/UserPhotos";

//import "./styles.css";

class UserProfile extends React.Component {
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

  componentDidMount() {
    console.log("component mounting..");
    axios
      .get("https://api.krino.fiddlingphotographer.com/user/1/")
      .then(function (response) {
        console.log(response.data);
        this.setState({ user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="container">
        <UserNavBar />
        <UploadProfilePhoto />
        <UserBio
          full_name={this.state.user.full_name}
          email={this.state.user.email}
          location={this.state.user.location}
          username={this.state.user.username}
          bio={this.state.user.bio}
        />
        <Link href="/EditUser">
          <Button
            style={{
              backgroundColor: "#32e0c4",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              width: "20%",
              marginLeft: "39.5%"
            }}
            variant="contained"
          >
            {" "}
            Edit User Information
          </Button>
        </Link>
        <hr />
        <UserPhotos />
      </div >
    );
  }
}

export default UserProfile;
