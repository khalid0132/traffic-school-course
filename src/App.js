
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin';
import CreateAdmin from './components/Admin/CreateAdmin/CreateAdmin';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/createAdmin">
            <CreateAdmin></CreateAdmin>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/addCourse">
            <Admin></Admin>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
