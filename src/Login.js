import React, { Component } from 'react';
import './Signin.css';

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            showLogin: false
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
    render() {  
        return (
            <div className="App">
                {this.state.showLogin == false ? <div>
                    <h1>Create Your Account</h1>
                    <br />
                    <p>User ID:</p>
                    <input type="text" name="User Id" placeholder="Enter User Id" />
                    <br />
                    <p>Password:</p>
                    <input type="password" name="Password" placeholder="Enter Your Password" />
                    <br />
                    <p>Forgot Password:</p>
                    <br />
                    <br />
                    <input type="submit" onClick={(e) => this.submit(e)} value="login" />
                    <br />
                    <br/>
        </div> : <div>You have Successfully logged in</div>}
        </div>

        )
    }
}
export default Login;
