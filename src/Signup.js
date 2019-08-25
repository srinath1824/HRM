import React, { Component } from 'react';
import './Signup.css';
import Customgrid from './datagrid';
// import Register from './register';
import RegisterForm from './registration'

class Signup extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      showLogin: true,
      is_valid_user:false,
      addprofileclicked: false,
      errormessage:"",
      UserId: "",
      Password: ""
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
    if (e.target.id === "login") {
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
  validate() {
    // const username=document.getElementById("user_id").value;
    // const userpwd=document.getElementById("user_pwd").value;

    this.setState({
      is_valid_user: true
    });

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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
}  

Signupcontent() {
  return (
    <div className="Signup-form">
      {/* <Register /> */}
      <RegisterForm />
    </div>
  )
}

  logincontent() {
    return (
      <div className="Login-form">
        <h1>Sign In</h1>
        <br/>
        <form onSubmit={() => this.validate()}>
          <p>User ID:</p>
          <input type="text" name="UserId" id= "user_id" placeholder="Enter User Id" onChange={(e) => this.handleChange(e)}/>
          <br />
          <p>Password:</p>
          <input type="password" name="Password" id="user_pwd" placeholder="Enter Your Password" onChange={(e) => this.handleChange(e)}/>
          <br />
          <br />
          <input className="registerbutton" type="submit" value="Login" />
          <br />     
          <p>
            {this.state.errormessage}
          </p>
        </form>
          <a href="#">Forgot Username or Password</a>
          <br />
          <br/>
          <div input type="checkbox" name="Remember" value="Remember me"> Remember me </div>
          <div className="registerbutton" onClick={(e) => this.switch(e)}>Register Now</div>
          <br />
      </div>
      )
      ;
  }

  render() {
    if(this.state.is_valid_user){
      return(
        <div>
          <Customgrid/>
          </div>
      )
    }   

  //   if (this.state.addregisterclicked) {
  //     return (
  //         <Register handelregister={this.handelregister} />
  //     )
  // }       

    let content = ''
    if (this.state.showLogin) {
      content = this.logincontent()
    }
    else {
      content = this.Signupcontent()
    }
    return (
      <div className="Apps">

        {/* <div className="btn" onClick={(e) => this.switch(e)} id="login">Login</div>
        <div className="btn" onClick={(e) => this.switch(e) } id="signup">Signup</div> */}
        <div className="container">
          {content}
        </div>

      </div>
    )
  }
}
export default Signup;


