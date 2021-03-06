import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import Dashboard from "./components/dashboard/dashboard.component";
import OAuthLogout from "./components/logout/logout.google";

export interface AppProps {
}

const App: React.FC<AppProps> = () => {
  const [isDashboard, setIsDashboard] = useState(false);
  const [isOAuthLogin, setIsOAuthLogin] = useState(false);

  const isOnDashboard = (props: boolean): void => {
    if (props === false) {
      setIsDashboard(false);
    }
    else {
      setIsDashboard(true);
    }
  }
  const setLoginType = (props: string): void => {
    if (props === 'OAuth') {
      setIsOAuthLogin(true);
    }
    else {
      setIsOAuthLogin(false);
    }
  }
  return (<Router>
    {!isDashboard && (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Shopping Platform</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/'>
                <Login
                  isOnDashboard={isOnDashboard}
                  setLoginType={setLoginType}
                />
              </Route>
              <Route path="/sign-in">
                <Login
                  isOnDashboard={isOnDashboard}
                  setLoginType={setLoginType}
                />
              </Route>
              <Route path="/sign-up">
                <SignUp
                  isOnDashboard={isOnDashboard}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    )}
    {isDashboard && (
      <div className="dashbord-warpper">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/dashboard"}>Shopping Platform</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {!isOAuthLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"} onClick={() => setIsDashboard(false)}>Logout</Link>
                  </li>
                )}
                {isOAuthLogin && (
                  <li className="nav-item">
                    <OAuthLogout
                      isOnDashboard={isOnDashboard}
                      setLoginType={setLoginType} />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Dashboard />
      </div>
    )}
  </Router >
  );
}

export default App;