import React from "react";
import EditUserNavBar from "../components/editUser/EditUserNavBar";
import EditUserForm from "../components/userProfile/EditUserForm";
import Container from "@material-ui/core/Container";

class EditUser extends React.Component {
  render() {
    return (
      <div>
        <EditUserNavBar />
        <Container maxWidth="sm">
          <div>
            <EditUserForm />
          </div>
        </Container>
      </div>
    );
  }
}

export default EditUser;
