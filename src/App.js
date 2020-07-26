import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import UploadPhoto from "./pages/UploadPhoto";
import UserProfile from "./pages/UserProfile";
import EditUser from "./pages/EditUser";
import Review from "./pages/Review";
import Footer from "./components/Footer";
import SignUp from "./components/home/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        title: "Krino",
        subtitle: "Capture the aspect",
      },
    };
  }

  render() {
    return (
      <>
        <Container className="p-0" fluid={true}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/explore" component={Explore} />
              <Route path="/uploadPhoto" component={UploadPhoto} />
              <Route path="/userProfile" component={UserProfile} />
              <Route path="/editUser" component={EditUser} />
              <Route path="/review/:photoId" component={Review} />
            </Switch>
          </Router>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
