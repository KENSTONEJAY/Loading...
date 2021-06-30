import React, { Component } from "react";
import API from "../utils/API";
import LoginComponent from "../components/Login";


class Login extends Component {

    state = {
        username: "",
        password: ""
    };


    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.username)

        API.login({
            username: this.state.username,
            password: this.state.password
        })
            .then(this.setState())
            .catch(err => console.log(err))
    }

    render() {
        return (

            <LoginComponent
                handleLogin={this.handleLogin}
                state={this.state}
            />

        )
    }
}

export default Login;