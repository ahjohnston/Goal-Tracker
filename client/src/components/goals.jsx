import React from 'react';
import goals from './dummyData/goals.js';
import axios from 'axios';
import styled from 'styled-components';
import { Heading, FunctionButton, GoalButton, BottomMenu, CenteredPage, GoalText, Scroll } from './sharedStyle.js';

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.userid,
      goalList: [],
    }
    //bind functions here
    this.clickGoal = this.clickGoal.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
  }
  getRequest() {
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
  componentDidMount() {
    this.getRequest();
  }

  clickGoal(event) {
    //change button color
    axios.put(`http://localhost:3000/goals?id=${event.target.value}`)
      .then(() => {
        this.getRequest();
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
  deleteGoal(event) {
    axios.delete(`http://localhost:3000/goals?id=${event.target.value}`)
      .then(() => {
        this.getRequest()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const goalList = this.state.goalList.map((goal) => {
      if (goal.userid === Number(this.state.currentUser)) {
        let date = null;
        let lastComplete = null;
        if (goal.lastcomplete && goal.lastcomplete !== 'NULL') {
          date = goal.lastcomplete;
          lastComplete = "Last completed on:";
        }
        return (
          <div key={goal.id}>
            <GoalButton>
              <GoalText onClick={this.clickGoal} value={goal.id}>
                {goal.goalname}
                <br></br>
                {/* </div> */}
                {/* <div> */}
                {lastComplete}
                <br></br>
                {date}
              </GoalText>
            </GoalButton>
            <FunctionButton
              value={goal.id}
              onClick={this.deleteGoal}>X</FunctionButton>
          </div>
        )
      }
    })
    return (
      <CenteredPage>
        <Heading>
          {`Hey ${this.props.username}!`} <br></br> Goal get 'em!
        </Heading>
        <Scroll>{goalList}</Scroll>
        <BottomMenu>
          <FunctionButton onClick={this.changeUser}>Change User</FunctionButton>
          <FunctionButton onClick={this.addGoal}>Add Goal</FunctionButton>
        </BottomMenu>
      </CenteredPage>

    )
  }
}





export default Goals;
