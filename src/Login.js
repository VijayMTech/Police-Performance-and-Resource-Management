import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import ACPPage from './ACPPage';
import PIPage from './PIPage';
import SIPage from './SIPage';
import Dclogin from './Dclogin';

const Login = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/dclogin" exact component={Dclogin} />
        <Route path="*" render={() => <h2>Error: Page not found</h2>} />
      </Switch>
    </Router>
  );
};

export default Login;
