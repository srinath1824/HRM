import React, { Component } from 'react';
import './profile.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile:{}
    }

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

handleChange(e) {
  this.setState({
    [e.target.name] : e.target.value
  });
}

render() {
    return (
      <div >           
        <h1>Add Profile </h1>
        <ul className="nav">
        <li>
        <TextField
            id="firstname"
            label="First name*"
            margin="normal"
            onChange={(e) => this.handleChange(e)}
            name="firstname" 
        /><br />
        </li>
        <li>
        <TextField
          id="lastname"
          label="Last name*"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="lastname"
        />
        </li>
        <br />
        <li>
        <TextField
          id="Email"
          label="Email"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Email"
        />
        </li>
        </ul>
        <br />
        <ul className="nav">
          <li>
        <TextField
          id="Phone"
          label="Phone"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Phone"
        />
        </li>
        <br />
        <li>
        <TextField
          id="Address"
          label="Address"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Address"
        />
        </li>
        <br />
        <li>
        <TextField
          id="Phone"
          label="Phone"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Phone"
        />
        </li>
        </ul>
        <br />
        
        {/* <p>  First name*
        <input type="text" name="firstname" /><br /></p>
        <p> Last name*
        <input type="text" name="lastname" /> <br /></p>
        <p>  Email*
        <input type="text" name="Email" /><br /></p>

        <p>Phone
        <input type="text" name="Phone" /> <br /></p>


        <p>  Address
        <input type="text" name="Address" /><br /></p>   */}
        <ul className="nav">
          <li>
        <InputLabel htmlFor="state">Select a State</InputLabel>
        <Select
          onChange={(e) => this.handleChange(e)}
          inputProps={{
            name: 'state',
            id: 'state',
          }}
          name="state"
          id="state"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </li><br/><li>
        <InputLabel htmlFor="city">Select a City</InputLabel>
        <Select
          onChange={(e) => this.handleChange(e)}
          inputProps={{
            name: 'city',
            id: 'city',
          }}
          name="city"
          id="city"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </li><br/><li>
        <TextField
          id="Phone"
          label="Phone"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Phone"
        />
        </li>
        </ul>
        <br />
        <ul className="nav">
          <li>
        <TextField
          id="Zip Code"
          label="Zip Code"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Zip Code"
        />
          </li><br/><li>
          <TextField
          id="Current Project"
          label="Current Project"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Current Project"
        />
        </li><br/><li>
        <TextField
          id="Previous Project"
          label="Previous Project"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Previous Project"
        />
        </li>
        </ul>
        <br/>
        {/* <p>  State        
        <select name="state" id="state">
          <option value="" selected="selected">Select State</option>
        </select></p>

      <p>  City        
        <select name="state" id="state">
          <option value="" selected="selected">Select a City</option></select></p> */}

        {/* <p> Zip Code     
          <input type="text" name="Zip Code" /> <br /></p>

        <p>  Current Project
        <input type="text" name="Current Project" /><br /></p>

        <p> Previous Project
        <input type="text" name="Previous Project" /> <br /></p> */}
        <ul className="nav">
          <li>
        <TextField
          id="Visa"
          label="Visa"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Visa"
        />
          </li><br/><li>
          <TextField
          id="Relocate"
          label="Relocate"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Relocate"
        />
        </li><br/><li>
        <TextField
          id="Experience"
          label="Experience"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Experience"
        />
        </li>
        </ul>
        <br/>
        <ul className="nav">
          <li>
        <TextField
          id="Skills"
          label="Skills"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Skills"
        />
          </li><br/><li>
          <TextField
          id="Desired Position"
          label="Desired Position"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Desired Position"
        />
        </li><br/><li>
        <TextField
          id="Notes"
          label="Notes"
          onChange={(e) => this.handleChange(e)}
          margin="normal"
          name="Notes"
        />
        </li>
        </ul>
        <br/>
        {/* <input type="submit" onClick={(e) => this.submit(e)} value="Submit" /> */}
        <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="full-width contained primary button group"
        >
        <Button type="submit" variant="contained" color="primary" onClick={(e) => this.submit(e)}>
          Submit
        </Button>
        <Button type="button" variant="contained" color="primary" onClick={(e) => this.backtodatagrid(e)}>
        Back
        </Button>
        </ButtonGroup>
        {/* <button type="button" >Back </button>  */}
        {/* <p>Visa
        <input type="text" name="Visa" /> <br /></p>
        

        <p>  Relocate
        <input type="text" name="Relocate" /><br /></p>

        <p>Experience
        <input type="text" name="Experience" /> <br /></p> */}


        {/* <p>  Skills
        <input type="text" name="Skills" /><br /></p>

        <p>Desired Position
        <input type="text" name="Desired Position" /> <br /></p>


        <p> Notes
        <input type="text" name="Notes" /><br /></p> */}

        
       
      </div>

    );
  }
}
export default Profile;
