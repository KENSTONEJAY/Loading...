// import './App.css';
import {BrowserRouter as Router, Route, Switch} from  "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Login />
      </div>
    </Router>
  )
};

export default App;
