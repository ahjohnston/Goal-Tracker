import React from 'react';

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
    //change button color
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
    if (!this.state.goalName) {
      alert("Please enter a goal name")
    } else if (!this.state.frequency) {
      alert("Please select a frequency")
    } else {
      //POST request (use this.state)

      //return to goal screen
      this.props.changePage('Goals');
    }
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h3>Add a new goal</h3>
        <div>
          <h4> Goal Name:</h4>
          <input onChange={this.updateGoal} placeholder="enter your goal here" value={this.state.goalName} />
          <h4> Frequency:</h4>
          <button onClick={this.updateFrequency} value="daily">Daily</button>
          <button onClick={this.updateFrequency} value="weekly">Weekly</button>

          <div>
            <button onClick={this.submitGoal}>Submit</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>
        </div>
      </div>

    )
  }
}


export default AddGoals;