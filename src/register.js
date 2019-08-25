import React, { Component } from 'react';
import './register.css';
import Signup from './Signup';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_valid_user:false,
      count: 0,
      First_name: "",
      Last_name: "",
      Phone: "",
      Email: "",
      SecurityQuestion: "",
      Username: "",
      Userpwd: ""
    }
  }
  
  backtologin(e){
    this.props.handelregister()

  }
  validate(field) {
    const {First_name, Last_name, Phone, Email, Username, Userpwd} = this.state;
    console.log(this.state)
    let validCount = this.state.count;
    
    if(field == "First_name") {
      if(First_name.length > 5){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
    if(field == "Last_name") {
      if(Last_name.length > 5){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
    if(field == "Phone") {
      if(Phone.length > 5){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
    if(field == "Email") {
      if(Email.includes(".com")){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
    if(field == "Username") {
      if(Username.length > 5){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
    if(field == "Userpwd") {
      if(Userpwd.length > 5){
        this.setState({count: validCount+1});
        return true;
      }
      return false;
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value });
    // let name = event.target.name;
    // if(this.state.event.target.name == "Last_name" && event.target.value.length > 5){
    //   this.setState({count: validCount+1});
    // }
    // if(this.state.event.target.name == "Phone" && event.target.value.length == 10){
    //   this.setState({count: validCount+1});
    // }
    // if(this.state.event.target.name == "Email" && event.target.value.includes(".com") > 5){
    //   this.setState({count: validCount+1});
    // }
    // if(this.state.event.target.name == "Username" && event.target.value.value > 5){
    //   this.setState({count: validCount+1});
    // }
    // if(this.state.event.target.name == "Userpwd" && event.target.value.value > 5){
    //   this.setState({count: validCount+1});
    // }
  }
  
  submit(e) {
    
    e.preventDefault();
    // const Fname=document.getElementById("firstName").value;
    // const Lname=document.getElementById("lastName").value;
    // const mobile_number=document.getElementById("phone_number").value;
    // const gmail=document.getElementById("userEmail").value;
    // const security_qus=document.getElementById("securityQuestion").value;
    // const username=document.getElementById("user_id").value;
    // const userpwd=document.getElementById("user_pwd").value;
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
  render() {
    if(this.state.is_valid_user){
      return(
        <div>
          <Signup/>
          </div>
      )
    }

    return (
      <div className="RegisterApp">
        <h1>Register</h1>
        <form onSubmit={(e) => this.submit(e)}>
        <ul className="nav">
            <li>
              <label>First name*
              <input type="text" name="First_name" id= "firstname" onChange={(e) => this.handleChange(e)}/><br />
              {this.validate("First_name") ? "" : <p style={{color: 'red'}}>Firstname length should greater than 5</p>}
              </label>
              </li>
              <li>
              <label> Last name*
              <input type="text" name="Last_name" id= "lastName" onChange={(e) => this.handleChange(e)}/> <br />
              {this.validate("Last_name") ? "" : <p style={{color: 'red'}}>Lastname length should greater than 5</p>}
              </label>
            </li>
        </ul>
        <ul className="nav">
          <li>
          <label>Phone
            <input type="text" name="Phone" id= "phone_number" onChange={(e) => this.handleChange(e)}/><br />
            {this.validate("Phone") ? "" : <p style={{color: 'red'}}>Phone number length should have 10 digits</p>}
            </label>
            </li>
            <li>
            <label>Email*
            <input type="text" name="Email" id= "userEmail" onChange={(e) => this.handleChange(e)}/><br />
            {this.validate("Email") ? "" : <p style={{color: 'red'}}>Email should contains .com</p>}
            </label>
          </li>
        </ul>

        <ul className="nav">
          <li>
          <label>securityQuestion
            <input type="text" name="SecurityQuestion" id= "securityQuestion" onChange={(e) => this.handleChange(e)}/><br />
            </label>
            </li>

            <li>
            <label>user Id*
            <input type="text" name="Username" id= "user_id" onChange={(e) => this.handleChange(e)}/> <br />
            {this.validate("Username") ? "" : <p style={{color: 'red'}}>Username length should greater than 5</p>}
            </label>
          </li>
        </ul>

        <ul className="nav">
          <li>
          <label>user Password*
            <input type="text" name="Userpwd" id= "user_pwd" onChange={(e) => this.handleChange(e)}/> <br />
            {this.validate("Userpwd") ? "" : <p style={{color: 'red'}}>Password length should greater than 5</p>}
            </label>
            </li>
            
            <li>
            <label>Register
            <input type="submit" value="Register"/>
            </label>
            <a href="#">back</a>
            </li>
        </ul>
        
        </form>
      </div>

    );
  }
}
export default Register;
