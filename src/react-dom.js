import React from "react";
import { Route,Router, Redirect, withRouter } from 'react-router';
import  Register from './profile.js';
import App from './App';


const router = () => {
  return (
    <Router> 
	<Route 
        path='/Register'
        component={Register}
        />
        <Route 
        path='/'
        component={App}
        />
    </Router>
  );
}

export default router;
