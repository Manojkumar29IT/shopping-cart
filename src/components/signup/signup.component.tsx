import React from "react";

export interface SignUpProps {
    isOnDashboard: CallableFunction
}
const SignUp: React.FC<SignUpProps> = (isOnDashboard) => {
    const handleSubmit = (event: any): any => {
        const firstname = event.target.elements.firstname.value;
        const lastname = event.target.elements.lastname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        console.log({ firstname: firstname, lastname: lastname, email: email, password: password });
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group form-margin">
                <label>First name</label>
                <input id="firstname" type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group form-margin">
                <label>Last name</label>
                <input id="lastname" type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group form-margin">
                <label>Email address</label>
                <input id="email" type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group form-margin">
                <label>Password</label>
                <input id="password" type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    );
}

export default SignUp;
