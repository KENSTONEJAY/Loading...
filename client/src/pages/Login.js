import React, { Component } from "react";
import API from "../utils/API";
import Login from "../components/Login";


class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    handleUserName = event => {
        this.setState({ username: event.target.value })
    }
    handlePassword = event => {
        this.setState({ password: event.target.value })
    }
    
    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.username)
       
        API.login({
            username: this.state.username,
            password: this.state.password
        })
            .then(this.setState())
            .then(console.log(this.state.parks))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Login
                handleLogin={this.handleLogin}
                handleUserName={this.handleUserName}
                handlePassword={this.handlePassword}
            />

        )
    }
}

export default Login;