import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent'
import TestCamera from './pages/TestCamera';
import TestPage from './pages/TestPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/test">Check out this cool test page!</Link>
          <Link to="/camera">Check out this super cool Yashica 124 MatG!</Link>

          {/* <TestComponent name="Tim" /> */}
        <Switch>
          <Route exact path="/test">
            <TestPage />
          </Route>
          <Route exact path="/camera">
            <TestCamera />
          </Route>
        </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
