import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import UploadPhoto from "./pages/UploadPhoto"
import UserProfile from './pages/UserProfile'
import EditUser from './pages/EditUser'
import Review from './pages/Review'

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/home" component={Home}/>
            <Route path ="/explore" component={Explore}/>
            <Route path ="/uploadPhoto" component={UploadPhoto}/>
            <Route path ="/userProfile" component={UserProfile}/>
            <Route path ="/editUser" component={EditUser}/>
            <Route path ="/review" component={Review}/>
          </Switch>
        </Router>
    </>
  );
}

export default App;