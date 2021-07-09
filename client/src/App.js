// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './actions/Login';
import Navbar from './components/Navbar'
import Home from './components/Home';
import TriState from './components/TriState';
import NewEngland from './actions/Concert';
import TopEvent from './actions/TopEvent';
import Sports from './actions/Sport';
import SignUp from './actions/SignUp';
import Header from './components/Header'
import Footer from "./components/Footer";
import { userContext } from './userContext';
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({ user: {} });
  }
  render(){
    return(
      <Router>
      <Navbar />
  
      <div>
        <Switch >
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/tri-state" component={TriState} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="User Logged Out Successfully." />
                )}
              />
        </Switch>
  
        <Footer />
      </div>
      </Router >
  
    )
  }
  
};

export default App;
