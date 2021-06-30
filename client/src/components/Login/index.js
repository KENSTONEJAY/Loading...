import React from "react";

const LoginComponent = (props) => {
  return (
    <div className="container">     
      <form className="container" onSubmit={props.handleLogin}>
        <div className="form-group">
          <label>Email
              <input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com"
              onChange={(e) => props.state.username= e.target.value} required />
          </label>
          <div className="mb-3" />
          <label >Password
              <input type="password" className="form-control" id="examplePassword" placeholder="Password"
              onChange={(e) => props.state.password=e.target.value} required />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" >Sign In</button>
        <h2>Or new to the page?</h2>
        <button type="button" className="btn btn-primary" >Sign Up</button>
      </form>
    </div>
  )
};

export default LoginComponent;