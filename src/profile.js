import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
  constructor(props) {
    super(props)

  }
  
  submit(e) {
    this.setState({
      username: "",
      showLogin: true
    })
  }
  backtodatagrid(e){
this.props.handelprofile()
}
render() {
             
    return (
      <div className="ProfileApp">
                  <button type="button" onClick={(e) => this.backtodatagrid(e)}>Back </button>            

        <h1>Add Profile </h1>
        <p>  First name*
        <input type="text" name="firstname" /><br /></p>

        <p> Last name*
        <input type="text" name="lastname" /> <br /></p>

        <p>  Email*
        <input type="text" name="Email" /><br /></p>

        <p>Phone
        <input type="text" name="Phone" /> <br /></p>


        <p>  Address
        <input type="text" name="Address" /><br /></p>  

        <p>  State        
        <select name="state" id="state">
  <option value="" selected="selected">Select State</option>
  
</select></p>

<p>  City        
        <select name="state" id="state">
  <option value="" selected="selected">Select a City</option></select></p>


        <p> Zip Code     
             <input type="text" name="Zip Code" /> <br /></p>


        <p>  Current Project
        <input type="text" name="Current Project" /><br /></p>

        <p> Previous Project
        <input type="text" name="Previous Project" /> <br /></p>

        <p>Visa
        <input type="text" name="Visa" /> <br /></p>
        

        <p>  Relocate
        <input type="text" name="Relocate" /><br /></p>

        <p>Experience
        <input type="text" name="Experience" /> <br /></p>


        <p>  Skills
        <input type="text" name="Skills" /><br /></p>

        <p>Desired Position
        <input type="text" name="Desired Position" /> <br /></p>


        <p> Notes
        <input type="text" name="Notes" /><br /></p>

        <input type="submit" onClick={(e) => this.submit(e)} value="Submit" />
       
      </div>

    );
  }
}
export default Profile;
