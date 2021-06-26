import React from "react";

function Login() {
    return (
        <div class="container">
        <div class="jumbotron" />
        <h1 class="text-center">Find Your Tickets</h1>
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="TicketScalper Logo" width="250" height="250" />
        <h3>Great Tickets Dont Come Cheap!</h3>
        <br />
        <form class="container" />
            <div class="mb-3" />
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleEmail" placeholder="email@example.com" required />
            <div class="mb-3" />
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="examplePassword" placeholder="Password" required />
            <button type="submit" class="btn btn-primary">Sign In</button>
            <br />
            <h2>Or new to the page?</h2>
            <button type="button" class="btn btn-primary">Sign Up</button>
        </div>
    )
};

export default Login;