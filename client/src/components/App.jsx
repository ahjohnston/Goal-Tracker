import React from 'react';
import Welcome from './welcome.jsx';
import Goals from './goals.jsx';
import AddGoal from './addGoal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentPage: 'Welcome'
    }
    //bind functions here
    this.changeUser = this.changeUser.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  async changeUser(id) {
    await this.setState({
      currentUser: id
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
        <Welcome
          name="Welcome"
          changeUser={this.changeUser}
          changePage={this.changePage}
        />

      )
    } else if (this.state.currentPage === 'Goals') {
      return (
        <Goals
          changePage={this.changePage}
          userid={this.state.currentUser}
        />

      )
    } else if (this.state.currentPage === 'AddGoal') {
      return (
        <AddGoal
          changePage={this.changePage}
          userid={this.state.currentUser}
        />

      )
    }
  }
}

export default App;
