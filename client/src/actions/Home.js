import React, { Component } from "react";
import HomeComponent from "../components/Home";


class Home extends Component {

    render() {
        return (

            <HomeComponent
                handleLogin={this.handleLogin}
                state={this.state}
            />

        )
    }
}

export default Home;