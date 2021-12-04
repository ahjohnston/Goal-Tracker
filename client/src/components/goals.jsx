import React from 'react';
import goals from './dummyData/goals.js';
// import users from './dummyData/goals.js';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.userid
    }
    //bind functions here
    this.clickGoal = this.clickGoal.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.addGoal = this.addGoal.bind(this);
  }

  clickGoal(event) {
    console.log("you just clicked a goal: ", event.target.value)
    //change button color
    //PUT request: update lastComplete
  }
  changeUser(event) {
    this.props.changePage('Welcome')
  }
  addGoal(event) {
    this.props.changePage('AddGoal')
  }

  render() {
    const goalList = goals.map((goal) => {
      if (goal.userId === Number(this.state.currentUser)) {
        return <button
          onClick={this.clickGoal}
          key={goal.goalName}
          value={goal.goalName}>{goal.goalName}
        </button>
      }
    })
    return (
      <div>
        {`User #${this.state.currentUser}'s Goals! Go get 'em!`}
        <div>{goalList}</div>
        <button onClick={this.changeUser}>Change User</button>
        <button onClick={this.addGoal}>Add Goal</button>
      </div>

    )
  }
}





export default Goals;
