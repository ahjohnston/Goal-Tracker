import React from 'react';
import Welcome from './welcome.jsx';
import Goals from './goals.jsx';
import AddGoal from './addGoal.jsx';
import styled from 'styled-components';
import {Body} from './sharedStyle.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentUserName: '',
      currentPage: 'Welcome'
    }
    //bind functions here
    this.changeUser = this.changeUser.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  async changeUser(id, name) {
    await this.setState({
      currentUser: id,
      currentUserName: name
    })
  }
  async changePage(page) {
    await this.setState({
      currentPage: page
    })
  }
  render() {
    if (this.state.currentPage === 'Welcome') {
      return (
        <Body>
          <Welcome
            name="Welcome"
            changeUser={this.changeUser}
            changePage={this.changePage}
          />
        </Body>

      )
    } else if (this.state.currentPage === 'Goals') {
      return (
        <Body>
          <Goals
            changePage={this.changePage}
            userid={this.state.currentUser}
            username={this.state.currentUserName}
          />
        </Body>
      )
    } else if (this.state.currentPage === 'AddGoal') {
      return (
        <Body>
          <AddGoal
            changePage={this.changePage}
            userid={this.state.currentUser}
          />
        </Body>
      )
    }
  }
}

export default App;
