import React, { Component } from 'react';
import Signup from "./Signup";
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
        <Signup/>
      <Footer />
    </div>
  );
  }
}
export default App;