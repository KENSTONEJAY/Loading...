import React from "react";

const LoginComponent = (props) => {
  return (
    <div className="container-fluid" >
      <div class="row justify-content-center align-items-center h-100">
        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <h3>Login</h3>
          <form onSubmit={props.handleLogin} className="form-inline justify-content-center">
            <div className="form-group">
              <label>Email
              <input type="email" className="form-control form-control-lg" id="exampleEmail" placeholder="email@example.com"
                  onChange={(e) => props.state.username = e.target.value} required />
              </label>
            </div>
            <div className="form-group">
              <label >Password
              <input type="password" className="form-control form-control-lg" id="examplePassword" placeholder="Password"
                  onChange={(e) => props.state.password = e.target.value} required />
              </label>
            </div>
            <br />
            <button type="submit" className="btn btn-info btn-lg btn-block" >Sign In</button>
            <br />
            <h2>New User?</h2>
            <button type="button" className="btn btn-info btn-lg btn-block" onClick={props.handleClick}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginComponent;