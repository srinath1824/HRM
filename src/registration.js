import React from 'react';
import Signup from './Signup';
import './Signup.css';
import './register.css';
import { Redirect, Link } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        is_valid_user:false,
        cancel: false
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["FirstName"] = "";
          fields["LastName"] = "";
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }
      console.log("wwwwww");
      console.log(this.state);
      fetch("http://172.16.75.112:8080/trp/register",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },  
      body: JSON.stringify({
        first_Name: this.state.fields.FirstName,
        last_Name: this.state.fields.LastName,
        phone: this.state.fields.mobileno,
        userEmail: this.state.fields.emailid,
        // securityQuestion: this.state.fields.SecurityQuestion,  
        user_Id: this.state.fields.username,
        user_pwd:this.state.fields.password
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
                  errormessage:"Invalid data entered"
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

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["FirstName"]) {
        formIsValid = false;
        errors["FirstName"] = "*Please enter your FirstName.";
      }

      if (typeof fields["FirstName"] !== "undefined") {
        if (!fields["FirstName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["FirstName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["LastName"]) {
        formIsValid = false;
        errors["LastName"] = "*Please enter your LastName.";
      }

      if (typeof fields["LastName"] !== "undefined") {
        if (!fields["LastName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["LastName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }

    canclebtn() {
      this.setState({
        cancel: true
      })
    }


  render() {
    if(this.state.is_valid_user){
      return(
        <div>
          <Signup/>
        </div>
      )
    }
    // if(this.state.cancel){
    //   // this.props.history.push(`/`)
    //   // <Redirect to='/' />
    // }
    
    return (
    
    <div className='Signup-form'>
        <h3 style={{textAlign: 'center'}}>Registration page</h3>
        <form method="post"  name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
        <ul className="nav">
            <li>
            <TextField
              id="outlined-name"
              label="FirstName"
              name="FirstName"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          {/* <label>First name*</label>
          <input type="text" name="FirstName" value={this.state.fields.FirstName} onChange={this.handleChange} /> */}
          <div className="errorMsg">{this.state.errors.FirstName}</div>
          </li>
          <li>
          {/* <label>Last name*</label>
          <input type="text" name="LastName" value={this.state.fields.LastName} onChange={this.handleChange}  />
           */}
           <TextField
              id="outlined-name"
              label="LastName"
              name="LastName"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          <div className="errorMsg">{this.state.errors.LastName}</div>
          </li>
        </ul>
        <br/>
        <ul className="nav">
          <li>
          {/* <label>Mobile No:</label>
          <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
           */}
          <TextField
              id="outlined-name"
              label="Mobile no."
              name="mobileno"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          <div className="errorMsg">{this.state.errors.mobileno}</div>
          </li>
          <li>
          {/* <label>Email ID:</label>
          <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
           */}
          <TextField
              id="outlined-name"
              label="Emailid"
              name="emailid"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          </li>
        </ul>
        <br/>
        <ul className="nav">
          <li>
          {/* <label>Username</label>
          <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} /> */}
          <TextField
              id="outlined-name"
              label="Username"
              name="username"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          <div className="errorMsg">{this.state.errors.username}</div>
          </li>
          <li>
          {/* <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} /> */}
          <TextField
              id="outlined-name"
              label="Password"
              name="password"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          <div className="errorMsg">{this.state.errors.password}</div>
          </li>
        </ul>
        <br/>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        {/* <input type="submit" style={{width: '20%'}} value="Register"/> */}
        <div className="registerbtn" onClick={() => this.canclebtn()}></div>
        <Link to="/">Cancel</Link>
        {/* <input style={{position: 'relative', left: "50%"}} value="Back" /> */}
        </form>
    </div>


      );
  }


}


export default RegisterForm;