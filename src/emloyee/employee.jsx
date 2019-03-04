import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Employee extends Component{
    constructor(){
        super();
        this.state = {
            employeeList : []
        }
        this.getEmployeeList();
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }
    render(){
        return(
            <div className="employee_list">
            <div className="heading"><span>Registered users list </span><span className="f-right"><Link to="/registration" >Register New User</Link></span></div>
           <table className="table">
               <thead>
               <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Email</th>
               <th>Mobile</th>
               <th>Action</th>
               </tr>
               </thead>
               <tbody>
                {this.state.employeeList.map((data,i) => {
                    return <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.firstName +' '+ data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile}</td>
                        <td><span className="cursor-pointer action_btn" onClick={() => this.editEmployee(data.id)}>Edit</span><span className="cursor-pointer action_btn" onClick={() => this.deleteEmployee(data.id)}>Delete</span></td>
                    </tr>
                })}     
               </tbody>
           </table>
           </div>
        );
    }
    getEmployeeList(){
        axios.get('http://localhost:3000/users')
        .then(result => {
            this.setState({
                employeeList : result.data
            });  
        }).then((err) => {
            console.err(err);
        })
    };
    editEmployee(id){
        this.props.history.push("/employee/"+id);
    };
    deleteEmployee(id){
       axios.delete('http://localhost:3000/users/'+id)
       .then((res) => {
           this.getEmployeeList();
        })
        .then((err) => {
            console.err(err)
        })
    };

}
export default Employee;