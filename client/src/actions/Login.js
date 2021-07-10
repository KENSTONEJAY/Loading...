import React, { Component } from "react";
import API from "../utils/API";
import LoginComponent from "../components/Login";

import {connect} from "react-redux";
import {authenticateUser} from "./authActions";
class Login extends Component {

    constructor(props){
        super(props);
        this.state = this.intialState;
    }
    intialState = {
        username: "",
        password: "",
        error:''
    };

    handleClick = () => this.props.history.push('/signup');
    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.username)
        this.props.authenticateUser(this.state.username,this.state.password);
        setTimeout(()=>{
            console.log("this.props.auth",this.props.auth);
            if(this.props.auth.isLoggedIn){
                return this.props.history.push("/home");
            }else{
                this.setState({"error":"invalid email or password"});
            }
        }, 500);
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
const mapStateToProps = state =>{
    return {
        auth:state.auth
    };
}
const mapDispatchToProps= dispatch=>{
    return{
        authenticateUser:(username, password)=> dispatch(authenticateUser(username, password))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);