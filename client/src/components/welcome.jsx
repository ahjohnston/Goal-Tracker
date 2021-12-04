import React from 'react';
import users from './dummyData/users.js';
import axios from 'axios';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: '',
      userList: []
    }
    //bind functions here
    this.selectUser = this.selectUser.bind(this);
    this.typeUser = this.typeUser.bind(this);
    this.submitUser = this.submitUser.bind(this);

  }
  componentDidMount() {
    axios('http://localhost:3000/users')
      .then((result) => {
        this.setState({
          userList: result.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async selectUser(event) {
    event.preventDefault();
    await this.props.changeUser(event.target.value)
    await this.props.changePage('Goals')
  }
  typeUser(event) {
    event.preventDefault();
    this.setState({
      newUser: event.target.value
    })
  }
  //for NEW users:
  submitUser(event) {
    event.preventDefault();

    //this.state.newUser -> POST request to users table
    axios.post(`http://localhost:3000/users?name=${this.state.newUser}`)
      .then((result) => {
        //currentPage: Goals
        this.props.changePage('Goals')
        //currentUser: newUser
        this.props.changeUser(this.state.newUser)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        Welcome! Please select your name:
        <div>
          {this.state.userList.map(user =>
            <button
              value={user.id}
              key={user.id}
              onClick={this.selectUser}>{user.username}
            </button>)}
        </div>
        <li>New User:
          <input onChange={this.typeUser
          } value={this.state.newUser} placeholder="your name here" />
          <button onClick={this.submitUser}>Go!</button>
        </li>
      </div>

    )
  }
}




export default Welcome;
