import React from 'react';
import goals from './dummyData/goals.js';
import axios from 'axios';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.userid,
      goalList: []
    }
    //bind functions here
    this.clickGoal = this.clickGoal.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.deleteGoal= this.deleteGoal.bind(this);
  }

  componentDidMount() {
    axios(`http://localhost:3000/goals?id=${this.state.currentUser}`)
      .then((result) => {
        this.setState({
          goalList: result.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  clickGoal(event) {
    //change button color
    //PUT request: update lastComplete
    axios.put(`http://localhost:3000/goals?id=${event.target.value}`)
      .then((result) => {
        console.log('this should auto update on the DOM')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  changeUser(event) {
    this.props.changePage('Welcome')
  }
  addGoal(event) {
    this.props.changePage('AddGoal')
  }
  deleteGoal(event){
    console.log(event.target.value)
    axios.delete(`http://localhost:3000/goals?id=${event.target.value}`)
    .then((result) => {
      console.log('this should auto update on the DOM')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const goalList = this.state.goalList.map((goal) => {
      if (goal.userid === Number(this.state.currentUser)) {
        let date = null;
        if (goal.lastcomplete && goal.lastcomplete !== 'NULL') {
          date = `Last completed on: ${goal.lastcomplete}`;
        }
        return (
          <div>
            <button
              onClick={this.clickGoal}
              key={goal.id}
              value={goal.id}>
              {goal.goalname}
              {date}
            </button>
            <button
              key={"Delete" + goal.id}
              value={goal.id}
              onClick={this.deleteGoal}>X</button>
          </div>
        )
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
