import React, { Component } from "react";
import LoginComponent from "../components/Login";


class Home extends Component {

    render() {
        return (

            <LoginComponent
                handleLogin={this.handleLogin}
                state={this.state}
            />

        )
    }
}

export default Home;