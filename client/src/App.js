// import './App.css';
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom";
import Login from './actions/Login';
import Navbar from './components/Navbar'
import Home from './actions/Home';
import Location from './actions/Location';
import Concert from './actions/Concert';
import TopEvent from './actions/TopEvent';
import Sports from './actions/Sport';
import SignUp from './actions/SignUp';

function App() {
  return (
  

  <Router>
    <Navbar />
    <div>
      <Switch >
      <Route exact path = {["/", "/home"]} component = {Home} />
        <Route exact path = "/location" component = {Location} />
        <Route exact path = "/sports" component = {Sports} />
        <Route exact path = "/concert" component = {Concert} />
        <Route exact path = "/topevent" component = {TopEvent} />
        <Route exact path = "/login" component = {Login} />
        <Route exact path = "/signup" component = {SignUp} />
      </Switch>
      </div>
    </Router>

  )
};

export default App;
