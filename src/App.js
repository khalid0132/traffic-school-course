
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Courses from './components/Home/Courses/Courses';
import Footer from './components/Home/Footer/Footer';
import Admin from './components/Admin/Admin';
import CreateAdmin from './components/Admin/CreateAdmin/CreateAdmin';
import Reviews from './components/Reviews/Reviews';
import CourseOrder from './components/CourseOrder/CourseOrder';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [signInUser, setSignInUser] = useState({})
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <p>Användare e-post: {signInUser.email}</p>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/createAdmin">
            <CreateAdmin></CreateAdmin>
          </Route>
          <PrivateRoute path="/reviews">
            <Reviews></Reviews>
          </PrivateRoute>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/addCourse">
            <Admin></Admin>
          </Route>
          <Route path="/contact">
            <Footer></Footer>
          </Route>
          <Route path="/courseOrder/:_id">
            <CourseOrder></CourseOrder>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
