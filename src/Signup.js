import React, { Component } from 'react';
import './Signup.css';
import Customgrid from './datagrid';
// import Register from './register';
import RegisterForm from './registration'
import { Link, Route } from 'react-router';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      showLogin: true,
      is_valid_user:false,
      addprofileclicked: false,
      errormessage:"",
      UserId: "",
      Password: "",
      errusername: "",
      errpassword: "",
      formIsValid: true
    }
  }

  componentDidMount() {
    this.setState({
      username: ""
    })
  }

  submit(e) {
    this.setState({
      username: "",
      showLogin: true
    })
  }
  
  addregister(e) {
    this.setState({
      addregisterclicked: true
    })
}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value });
}

handelregister = () => {
  this.setState({
    addregisterclicked: false
  })
}
  switch(e) {
    if (e === "login") {
      this.setState({
        showLogin: true
      })

    }
    else {
      this.setState({
        showLogin: false
      })
    }
  }
  validate(errors) {

    this.switch("login")

    console.log(errors)
    if(errors) {
    fetch("http://172.16.75.112:8080/trp/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },  body: JSON.stringify({
        userId: this.state.UserId,
        userPwd: this.state.Password
        }),
    })
          .then(res => res.json())
          .then(
            (result) => {
              const data= result.responseCode
              if(data===null)  
              {
                this.setState({
                  is_valid_user: false,
                  errormessage:"Invalid UserName or Password"
                }) 
              }
              else{
                
                if(data.errorCode==="0")
                  this.setState({
                    is_valid_user: true
                  } )
                  else{
                    this.setState({
                        errormessage:data.errorMsg
                    })
                  }
                  }
                    },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }
}  

Signupcontent() {
  return (
    // <div className="Signup-form">
      // <Link to="/register"></Link>
      <RegisterForm />
    // </div>
  )
}

logincontent() {
  let errors = {
    username: "",
    password: ""
  };

  if (this.state.UserId === "") {
    // this.setState({ formIsValid : false, ...state,
    errors.username = "Please enter your Username.";
    // this.setState({formIsValid : false});
    // this.setState({errusername: errors.username});
  }

  if (this.state.Password === "") {
    // this.setState({ formIsValid : false, ...state, password: "Please enter your Password"});
    // this.setState({formIsValid : false});
    errors.password= 'Please enter your Password.';
    // this.setState({errpassword: errors.password})
  }

  
  return (
    <div>
      <div className="Login-form">
      <h1 >Sign In</h1>
      <br/>
      <TextField
        id="standard-name"
        label="Enter Username"
        onChange={(e) => this.handleChange(e)}
        margin="normal"
        name="UserId"
      />
      <div className="errorMsg">{errors.username}</div>
      <TextField
        id="standard-name"
        label="Enter Password"
        onChange={(e) => this.handleChange(e)}
        margin="normal"
        name="Password"
      />
      <div className="errorMsg">{errors.password}</div>
        {/* <p>User ID:</p>
        <input type="text" name="UserId" id= "user_id" placeholder="Enter User Id" onChange={(e) => this.handleChange(e)}/>
        <div className="errorMsg">{errors.username}</div>
        <br />
        <p>Password:</p>
        <input type="password" name="Password" id="user_pwd" placeholder="Enter Your Password" onChange={(e) => this.handleChange(e)}/>
        <div className="errorMsg">{errors.password}</div> */}
        <br />
        <br />
        <Button onClick={(errors) => this.validate(errors)} variant="contained" color="primary">
          Login
        </Button>
        {/* <input type="submit" value="Login" /> */}
        {/* <div className="registerbtn" onClick={(e) => this.switch(e)}>Register Now</div> */}
        <Link to="/register">Register Now</Link>
        <br />     
        <p>
          {this.state.errormessage}
        </p>
        <a href="#">Forgot Username or Password</a>
        <br />
        <br/>
        <div input type="checkbox" name="Remember" value="Remember me"> Remember me </div>
        <br />
      </div>
    </div>)
}

  render() {
    if(this.state.is_valid_user){
      return(
        <div>
          <Customgrid/>
          </div>
      )
    } 

    let content = ''
    if (this.state.showLogin) {
      content = this.logincontent()
    }
    else {
      content = this.Signupcontent()
    }
    return (
      <div className="Apps">
          {content}
      </div>
    )
  }
}
export default Signup;


