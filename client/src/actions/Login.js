import React, { Component } from "react";
import API from "../utils/API";
import LoginComponent from "../components/Login";


class Login extends Component {

    state = {
        username: "",
        password: ""
    };

    handleClick = () => this.props.history.push('/signup');
    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.username)

        API.login({
            username: this.state.username,
            password: this.state.password
        })
            .then(()=>{
                this.setState({
                    username: "",
                    password: ""
                });
                this.props.history.push('/home');
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <LoginComponent
                handleLogin={this.handleLogin}
                state={this.state}
                handleClick ={this.handleClick}
            />

        )
    }
}

export default Login;