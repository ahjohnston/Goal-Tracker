import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Heading, CenteredPage, CenteredRow, SelectButton, FunctionButton, BottomMenu, Selected } from './sharedStyle.js';

const ListButton = styled.button`
  background-color: pink;
`
class AddGoals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userid,
      goalName: null,
      frequency: null,
    }
    //bind functions here
    this.submitGoal = this.submitGoal.bind(this);
    this.cancel = this.cancel.bind(this);
    this.updateFrequency = this.updateFrequency.bind(this);
    this.updateGoal = this.updateGoal.bind(this);
  }

  updateFrequency(event) {
    this.setState({
      frequency: event.target.value
    })
  }
  updateGoal(event) {
    this.setState({
      goalName: event.target.value
    })
  }
  cancel(event) {
    this.props.changePage('Goals');
  }
  submitGoal(event) {
    const { user, goalName, frequency } = this.state;
    if (!this.state.goalName) {
      alert("Please enter a goal name")
    } else if (!this.state.frequency) {
      alert("Please select a frequency")
    } else {
      //POST request (use this.state)
      axios.post(`http://localhost:3000/goals?userid=${user}&goalName=${goalName}&frequency=${frequency}&lastComplete=NULL`)
        .then((result) => {
          this.props.changePage('Goals');
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  render() {
    let dailyButton = <SelectButton onClick={this.updateFrequency} value="daily">Daily</SelectButton>

    let weeklyButton =  <SelectButton onClick={this.updateFrequency} value="weekly">Weekly</SelectButton>

    if (this.state.frequency === 'daily') {
      dailyButton = <Selected onClick={this.updateFrequency} value="daily">Daily</Selected>
    } else if (this.state.frequency === 'weekly'){
      weeklyButton = <Selected onClick={this.updateFrequency} value="weekly">Weekly</Selected>
    }
    return (
      <CenteredPage>
        <Heading>Add a new goal</Heading>
        <CenteredPage>
          <h4> Goal Name:</h4>
          <input onChange={this.updateGoal} placeholder="enter your goal here" value={this.state.goalName} />
          <h4> Frequency:</h4>
          <CenteredRow>
            {dailyButton}
            {weeklyButton}
          </CenteredRow>

          <BottomMenu>
            <FunctionButton onClick={this.submitGoal}>Submit</FunctionButton>
            <FunctionButton onClick={this.cancel}>Cancel</FunctionButton>
          </BottomMenu>
        </CenteredPage>
      </CenteredPage>

    )
  }
}


export default AddGoals;