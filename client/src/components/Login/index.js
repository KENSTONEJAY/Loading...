import React from "react";
import {Alert} from "react-bootstrap";
const LoginComponent = (props) => {
  return (
    
    <div className="container-fluid" >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-lg-6">
          <div className="card1 pb-5">
            <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="assets/img/giants.jpg" className="image" /> </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card2 card border-0 px-4 py-5">
            {props.state.error && <Alert variant="danger">{props.state.error}</Alert>}
            <form onSubmit={props.handleLogin} className="form-inline justify-content-center">
              <div className="row mb-3 px-3">

                <input type="email" className="form-control form-control-lg" id="exampleEmail" placeholder="email@example.com"
                  onChange={(e) => props.state.username = e.target.value} required />
              </div>
              <div className="row mb-3 px-3">
                <input type="password" className="form-control form-control-lg" id="examplePassword" placeholder="Password"
                  onChange={(e) => props.state.password = e.target.value} required />
              </div>
              <div className="row mb-3 px-3"> <button type="submit" className="btn btn-primary" onClick={props.handleLogin}>Login</button> </div>
              <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger " onClick={props.handleClick}>Register</a></small> </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoginComponent;