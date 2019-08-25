import React from 'react';
import Signup from './Signup';
import './style.css';
import './register.css';

class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        is_valid_user:false,

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
      fetch("http://172.16.75.112:8080/trp/register",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },  
      body: JSON.stringify({
        first_Name: this.state.First_name,
        last_Name: this.state.Last_name,
        phone: this.state.Phone,
        userEmail: this.state.Email,
        securityQuestion: this.state.SecurityQuestion,  
        user_Id: this.state.Username,
        user_pwd:this.state.Userpwd
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



  render() {
    if(this.state.is_valid_user){
      return(
        <div>
          <Signup/>
          </div>
      )
    }
    return (
    
     <div id="RegisterApp">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
        <ul className="nav">
          <li>
          <label>First name*</label>
          <input type="text" name="FirstName" value={this.state.fields.FirstName} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.FirstName}</div>
          </li>
          <li>
          <label>Last name*</label>
          <input type="text" name="LastName" value={this.state.fields.LastName} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.LastName}</div>
          </li>
        </ul>
        <ul className="nav">
          <li>
          <label>Mobile No:</label>
          <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
          <div className="errorMsg">{this.state.errors.mobileno}</div>
          </li>
          <li>
          <label>Email ID:</label>
          <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          </li>
        </ul>
        <ul className="nav">
          <li>
          <label>Username</label>
          <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.username}</div>
          </li>
          <li>
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
          <div className="errorMsg">{this.state.errors.password}</div>
          </li>
        </ul>
        <input type="submit" className="button"  value="Register"/>
        {/* <input style={{position: 'relative', left: "50%"}} value="Back" /> */}
        </form>
    </div>


      );
  }


}


export default RegisterForm;