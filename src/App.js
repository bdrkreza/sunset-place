import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home/Home/Home";
import Rooms from "./Components/Home/Rooms/Rooms/Rooms";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch/NoMatch";
import SignUp from "./Components/SignUp/SignUp";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Services} />
          <Route path="/room" component={Rooms} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>

    </>
  );
}

export default App;