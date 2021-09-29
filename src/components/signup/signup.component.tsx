import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

export interface SignUpProps {
    isOnDashboard: CallableFunction
}
const SignUp: React.FC<SignUpProps> = ({ isOnDashboard }) => {
    const [isLoading, setIsLoading] = useState(false);
    let history = useHistory();
    const handleSubmit = (event: any): any => {
        event.preventDefault();
        setIsLoading(true);
        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log({ firstname: firstname, lastname: lastname, email: email, password: password });
        axios.post('http://localhost:4000/user', {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password
        }).then(resp => {
            setIsLoading(false);
            console.log(resp);
            history.push('/sign-in');
        });
    }
    return (
        <div>
            <BlockUi tag="div" blocking={isLoading}>
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group form-margin">
                        <label>First name</label>
                        <input id="firstname" type="text" className="form-control" placeholder="First name" required />
                    </div>

                    <div className="form-group form-margin">
                        <label>Last name</label>
                        <input id="lastname" type="text" className="form-control" placeholder="Last name" required />
                    </div>

                    <div className="form-group form-margin">
                        <label>Email address</label>
                        <input id="email" type="email" className="form-control" placeholder="Enter email" required />
                    </div>

                    <div className="form-group form-margin">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Enter password" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </form>
            </BlockUi>
        </div>
    );
}

export default SignUp;
