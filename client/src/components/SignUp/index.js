import React from "react";

const SignUpComponent = (props) => {
    return (
        <div className="container-fluid" >
            <div className="row justify-content-center align-items-center h-100">
                <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <h3>Sign Up</h3>
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-group">
                            <label>Name
                    <input type="text" className="form-control form-control-lg" placeholder="Name"
                                    onChange={(e) => props.state.name = e.target.value} /></label>
                        </div>

                        <div className="form-group">
                            <label>Email address
                    <input type="email" className="form-control form-control-lg" placeholder="Enter email"
                                    onChange={(e) => props.state.email = e.target.value} />
                            </label>
                        </div>

                        <div className="form-group">
                            <label>Password
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password"
                                    onChange={(e) => props.state.password = e.target.value} />
                            </label>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-info btn-lg btn-block" >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignUpComponent;