import React, { Component } from "react";
import LoginComponent from "../components/Login";


class TopEvent extends Component {

    render() {
        return (

            <LoginComponent
                handleLogin={this.handleLogin}
                state={this.state}
            />

        )
    }
}

export default TopEvent;