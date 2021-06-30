import React, { Component } from "react";
import API from "../utils/API";
import SignUpComponent from "../components/SignUp";

class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        API.signUp(this.state)
            .then(() => {
                this.setState({
                    name: "",
                    email: "",
                    password: ""
                })
                this.props.history.push('/login');
            }
            )
            .catch(err => console.log(err))
    }

    render() {
        return (

            <SignUpComponent
                handleSubmit={this.handleSubmit}
                state={this.state}
            />

        )
    }
}

export default SignUp;