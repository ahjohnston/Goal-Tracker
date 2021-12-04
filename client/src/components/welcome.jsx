import React from 'react';
import users from './dummyData/users.js';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: ''
    }
    //bind functions here
    this.selectUser = this.selectUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.submitUser = this.submitUser.bind(this);

  }

  async selectUser(event) {
    event.preventDefault();
    await this.props.changeUser(event.target.value)
    await this.props.changePage('Goals')
  }
  createUser(event) {
    event.preventDefault();
    this.setState({
      newUser: event.target.value
    })
  }
  //for NEW users:
  submitUser(event) {
    event.preventDefault();

    //this.state.newUser -> POST request to users table

    //currentPage: Goals
    this.props.changePage('Goals')
    //currentUser: newUser
    this.props.changeUser(this.state.newUser)
  }

  render() {
    return (
      <div>
        Welcome! Please select your name:
        <div>
          {users.map(user =>
            <button
              value={user.id}
              key={user.id}
              onClick={this.selectUser}>{user.name}
            </button>)}
        </div>
        <li>New User:
          <input onChange={this.createUser} value={this.state.newUser} placeholder="your name here" />
          <button onClick={this.submitUser}>Go!</button>
        </li>
      </div>

    )
  }
}




export default Welcome;
