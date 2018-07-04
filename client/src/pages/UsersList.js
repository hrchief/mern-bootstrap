import React, { Component } from "react";
import UserDataService from '../services/user.service'

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.showAllUsers();
  }
  showAllUsers() {
    UserDataService.getAll().then(response => {
      this.setState({ users: response.data });
    }).catch(e => {
      console.log(e);
    });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <table className="table table-striped table-hover table-bordered table-sm caption-top">
          <caption><h1 className="display-5 text-center">List of users</h1></caption>
          <thead className="table-dark">
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>          
            {
              users &&
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{ index }</th>
                  <td>{ user.email }</td>
                  <td>{ user.password }</td>
                  <td>{ user.name }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}