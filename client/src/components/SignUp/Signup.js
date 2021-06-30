import React, { Component } from "react";

const SignUpComponent = (props)=> {
        return (
            <form onSubmit={props.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" 
                    onChange={(e) => props.state.firstName=e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                    onChange={(e) => props.state.lastName=e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange={(e) => props.state.emailAddress=e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange={(e) => props.state.password=e.target.value}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
}
export default SignUpComponent;