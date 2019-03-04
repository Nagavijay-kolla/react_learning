import React,{Component } from 'react';
import '../registration/registration.css'
import axios from 'axios';
import { Link } from "react-router-dom";


class Registration extends Component{
    constructor(){
        super()
        this.state = {           
              firstName : '',
              lastName : '',
              email : '',
              mobile : '',
              password : '',
              createdAt : new Date().toISOString()
           
        };
    this.getRegister = this.getRegister.bind(this)
    }
    render(){        
        return(           
            <div className="registration-form">
                <h3>Registration Form</h3>
                <div>
                    <div className="form-group-div">
                        <label className="label-name">First Name  </label>
                        <input type="text" onChange={(e) => this.setState({firstName : e.target.value})}   placeholder="First Name"></input>
                    </div>                    
                    <div className="form-group-div">
                        <label className="label-name">Last Name </label>
                        <input type="text" onChange={(e) => this.setState({lastName : e.target.value})}  placeholder="Last Name"></input>
                    </div>
                    <div className="form-group-div">
                        <label className="label-name">Email  </label>
                        <input type="text" onChange={(e) => this.setState({email : e.target.value})} placeholder="Email"></input>
                    </div>
                    <div className="form-group-div">
                        <label className="label-name">Mobile  </label>
                        <input type="text" onChange={(e) => this.setState({mobile : e.target.value})}  placeholder="Mobile"></input>
                    </div>
                    <div className="form-group-div">
                        <label className="label-name">Password</label>
                        <input type="password" onChange={(e) => this.setState({password : e.target.value})}  placeholder="Password"></input>
                    </div>
                    <div className="form-group-div">
                        <label className="label-name">Re-enter Password</label>
                        <input type="password"  placeholder="Re-enter Password" ></input>
                    </div>
                    <div className="form-group-div btn-div">
                        <button className="btn-register" onClick={this.getRegister}>Register</button>
                        <button className="btn-register" ><Link to="/login" >Login</Link></button>
                    </div>
                </div>               
            </div>
        )
    }
    getRegister(){       
        axios.post('http://localhost:3000/users',this.state ).then(res => {
            this.props.history.goBack();
        });
    }
}

export default Registration;