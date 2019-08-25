import React, { Component } from 'react';
import './Upload.css';

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  submit(e) {
    this.setState({
      username: "",
      showLogin: true
    })
  }
  backtodatagrid(e){
    this.props.handelresume()
    }
    
  render() {
    return (
      <div className="UploadApp">
          <button type="button" onClick={(e) => this.backtodatagrid(e)}>Back</button>            
            <br />
            <h1>Upload Resume</h1> 

          <center><input type="file" name="drag and drop" multiple /></center>
          <br />
          <center> <input type="submit" onClick={(e) => this.submit(e)} value="Submit" /></center>
          <br />
          <br />
        
      </div>
    )
  }
}
export default Upload;