import styled, { css, keyframes } from 'styled-components';

// const pulse = keyframes`
//   0% {
//     opacity: 0;
//   };
//   100% {
//     opacity: 1;
//   };
// `
const fadeIn = keyframes`
  0% {
    background-position: 0% 50%;
  };
  50% {
    background-position: 100% 50%;
  };
  100% {
    background-position: 0% 50%;
  };
`

const animation = props =>
  css`
  ${ fadeIn } ease 15s infinite alternate;
`
export const Body = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  height: 100vh;
  animation: ${animation};
`
export const ListButton = styled.button`
  background-color: rgba(134, 177, 247,0.3);
  padding: 10% 0%;
  width: 96%;
  margin: 2%;
  font-size: 26px;
  border: none;
`
export const BottomMenu = styled.div`
  border: solid 2px;
  border-color: blue yellow green red;
  width: 96%;
  margin:2%;
  display: flex;
  justify-content: space-around;
`
export const FunctionButton = styled.button`
  background-color: rgba(186, 255, 191, 0.3);
  padding: 3%;
  margin: 2px 0px;
  border: none;
  border-radius: 5px;
`
export const SelectButton = styled.button`
  margin: 10px;
  padding: 20px;
  width: 40%;
  border: none;
`
export const Selected = styled(SelectButton)`
  background-color: pink;
`
export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const CenteredPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  margin: 10%;
`
export const GoalButton = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;

  border: solid;
  border-radius: 50%;
  text-align: center;
  flex-wrap: wrap;
  font-size: 20px;
`
export const GoalText = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 100%;
`
export const Heading = styled.h1`
  text-align: center;
`
export const Input = styled.input`
  margin: 2px 0px;
`
export const Scroll = styled.div`
  height: 450px;
  overflow: scroll;
`