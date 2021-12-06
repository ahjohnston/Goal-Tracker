import React from 'react';
import users from './dummyData/users.js';
import axios from 'axios';
import styled from 'styled-components';
import { Heading, FunctionButton, ListButton, BottomMenu, Input, Scroll } from './sharedStyle.js';

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
    await this.props.changeUser(event.target.value, event.target.name)
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
    if (this.state.newUser.length < 2) {
      alert("Please enter a valid name")
    } else {

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
  }

  render() {
    return (
      <div>
        <Heading>Welcome! <br></br> Please select your name:</Heading>
        <Scroll>
          {this.state.userList.map(user =>
            <div key={user.id}>
              <ListButton
                value={user.id}
                name={user.username}
                onClick={this.selectUser}>{user.username}
              </ListButton>
            </div>)}
        </Scroll>
        <BottomMenu>
          <Input onChange={this.typeUser
          } value={this.state.newUser} placeholder="Create a new user" />
          <FunctionButton onClick={this.submitUser}>Go!</FunctionButton>
        </BottomMenu>
      </div>

    )
  }
}




export default Welcome;
