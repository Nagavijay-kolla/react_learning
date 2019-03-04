import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

class EmployeeEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : '',
            firstName : '',
            lastName : '',
            email : '',
            mobile : '',
            password : '',
              
        }
        let userID = this.props.match.params.id;
        axios.get('http://localhost:3000/users/'+userID).then((res) => {
            debugger
            this.setState({
              id :res.data.id,
              firstName : res.data.firstName,
              lastName : res.data.lastName,
              email : res.data.email,
              mobile : res.data.mobile,
              password : res.data.password,
              updatedAt : new Date().toISOString()          
            });
        });
    }
    render(){
        return(
            <div className="registration-form">
            <h3>Registration Form</h3>
            <div>
                <div className="form-group-div">
                    <label className="label-name">First Name  </label>
                    <input type="text" onChange={(e) => this.setState({firstName : e.target.value})} value={this.state.firstName}  ref={el => this.firstName = el} placeholder="First Name"></input>
                </div>                    
                <div className="form-group-div">
                    <label className="label-name">Last Name </label>
                    <input type="text" onChange={(e) => this.setState({lastName : e.target.value})} value={this.state.lastName} ref={el => this.lastName = el}  placeholder="Last Name"></input>
                </div>
                <div className="form-group-div">
                    <label className="label-name">Email  </label>
                    <input type="text" onChange={(e) => this.setState({email : e.target.value})} value={this.state.email} ref={el => this.email = el} placeholder="Email"></input>
                </div>
                <div className="form-group-div">
                    <label className="label-name">Mobile  </label>
                    <input type="text" onChange={(e) => this.setState({mobile : e.target.value})} value={this.state.mobile} ref={el => this.mobile = el} placeholder="Mobile"></input>
                </div>
                <div className="form-group-div btn-div">
                    <button className="btn-register" onClick={() => this.updateEmployee(this.state.id)}>Update</button>
                    <button className="btn-register" ><Link to="/employees" >Cancel</Link></button>
                </div>
            </div>               
        </div>            
    
        )
    }
    updateEmployee(id){
        axios.put('http://localhost:3000/users/'+id,this.state)
        .then((res) => {
            this.props.history.push("/employees");
        })
        .then((err) => {
            console.err(err)
        });
    }
}

export default EmployeeEdit;