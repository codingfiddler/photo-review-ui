import React from "react";
import ReactDOM from "react-dom";

import UserNavBar from "../components/userProfile/UserNavBar";
import UploadProfilePhoto from "../components/userProfile/UploadProfilePhoto";
import UserBio from "../components/userProfile/UserBio";
import UserPhotos from "../components/userProfile/UserPhotos";
//import "./styles.css";

class UserProfile extends React.Component {
  render() {
    return (
      <div id="container">
        <UserNavBar />
        <UploadProfilePhoto />
        <UserBio />
        <UserPhotos />
      </div>
    );
  }
}

export default UserProfile;
