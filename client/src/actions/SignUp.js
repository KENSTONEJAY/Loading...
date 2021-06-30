import React, { Component } from "react";
import API from "../utils/API";
import SignUpComponent from "../components/SignUp/Signup";


class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        emailAddress:"",
        password:""
    };

   
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username)
       
        API.signUp(state)
            .then(this.setState())
            .catch(err => console.log(err))
    }

    render() {
        return (

            <SignUpComponent
                handleLogin={this.handleSubmit}
                state={this.state}
            />

        )
    }
}

export default SignUp;