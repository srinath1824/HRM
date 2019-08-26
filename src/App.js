import React, { Component } from 'react';
import Signup from "./Signup";
import Header from './Header';
import Footer from './Footer';
import { Router,Route, browserHistory, Link} from 'react-router';
import RegisterForm from './registration'
import Datagrid from './datagrid';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
          <Router history={browserHistory}>
            <Route exact path = "/" component = {Signup} />
            <Route exact path = "register" component = {RegisterForm} />
            <Route exact path = "home" component = {Datagrid} />
          </Router>
      <Footer />
    </div>
  );
  }
}
export default App;