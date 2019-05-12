import React, {Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Login extends Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
        this.doLogin = this.doLogin.bind(this);
    }
    render(){
        return(
            <div className="registration-form">
                <h3>Login Form</h3>
                <div>
                   
                    <div className="form-group-div">
                        <label className="label-name">Email  </label>
                        <input type="text" onChange={(e) => this.setState({email : e.target.value})}  placeholder="Email"></input>
                    </div>                   
                    <div className="form-group-div">
                        <label className="label-name">Password</label>
                        <input type="password" onChange={(e) => this.setState({password : e.target.value})} placeholder="Password"></input>
                    </div>                   
                    <div className="form-group-div btn-div">
                    <button className="btn-register" onClick={this.doLogin}>Login</button>
                        <button className="btn-register"> <Link to="/registration">Signup</Link></button>
                    </div>
                    
                </div>
            </div>
        )
    }
    doLogin(){
        let email = this.state.email;
        let password = this.state.password;
        axios.get('http://localhost:3000/users').then(res => {
            var isUserExist =  res.data.find(function(user){
                return (user.email === email && user.password === password);
            });
            if(isUserExist){
                this.props.history.push("/employees");
            }
        });
    }
}

export default Login;