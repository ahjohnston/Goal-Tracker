import React from 'react';
import styled from 'styled-components';

const ListButton = styled.button`
  background-color: pink;
`

class EditGoals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind functions here
  }

  render() {
    return (
      <div>
        Edit your goal:
      </div>

    )
  }
}



export default EditGoals;