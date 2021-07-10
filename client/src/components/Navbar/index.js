import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import { logoutUser } from "../../actions/authActions";
class Navbar extends React.Component {
  logout=()=>{
    this.props.logoutUser();
  };
  render() {
    let guestNav = (
    <div className="navbar" id="navbarNav">
      <div className="navbar navbar-left">
      <NavLink to="/home" className="nav-link"  > Local </NavLink>
      <NavLink to="/tri-state" className="nav-link" > Tri State </NavLink>

      </div>
      <div className="navbar navbar-right">
        <NavLink to="/signup" className="nav-link"   > Register </NavLink>
        <NavLink to="/login" className="nav-link"   > Login </NavLink>
      </div>
    </div>)
    let userNav = (
      <div className="navbar" id="navbarNav">
        <NavLink to="/home" className="nav-link"  > Local </NavLink>
        <NavLink to="/tri-state" className="nav-link" > Tri State </NavLink>
        <div className="navbar navbar-right">
          <NavLink to="/logout" className="nav-link"   onClick={this.logout} > Log out </NavLink>
        </div>
      </div>)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="#">TICKET SCALPER</a>
        <div className="container">
          <div className="row-cols-auto">
            {this.props.auth.isLoggedIn? userNav:guestNav}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state =>{
  return{
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);