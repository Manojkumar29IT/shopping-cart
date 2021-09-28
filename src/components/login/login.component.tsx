import React, { Component, useState } from "react";
import OAuthLogin from "./login.google";

export interface LoginProps {
    isOnDashboard: CallableFunction,
}

const Login: React.FC<LoginProps> = ({ isOnDashboard }) => {

    const handleSubmit = (event: any): any => {
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log({ email: email, password: password });
        isOnDashboard();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group form-margin">
                    <label>Email address</label>
                    <input id="email" type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group form-margin">
                    <label>Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group form-margin">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input checkbox-margin" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <div className="divider-container">
                <p className="divider-text">OR</p>
                <hr className="ruler-margin" />
                <div className="google-login-container">
                    <OAuthLogin isOnDashboard={isOnDashboard} />
                </div>
            </div>
        </div>
    );
}

export default Login;