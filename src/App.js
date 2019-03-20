import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './registration/registration';
import Login from './login/login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Employee from './emloyee/employee';
import EmployeeEdit from './employee-edit/employee-edit';
import Layout from './layout/layout';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout>
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route exatct path="/employees" component={Employee} />
            <Route path="/employee/:id" component={EmployeeEdit} />
          </div>
        </Router>
      </Layout>
    );
  }
}

export default App;
