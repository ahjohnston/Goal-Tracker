import styled, { css, keyframes } from 'styled-components';

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
  font-family: Optima, sans-serif	;
  margin: 0px;
  padding: 0px;
`
export const ListButton = styled.button`
  background-color: rgba(134, 177, 247,0.3);
  padding: 10% 0%;
  width: 96%;
  margin: 2%;
  font-size: 26px;
  border: none;
  font-family: Optima, sans-serif	;
`
export const BottomMenu = styled.div`
  border-color: none;
  background-color: rgba( 255, 255, 255, 0.5);
  width: 96%;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-around;
  font-family: Optima, sans-serif	;
  position: absolute;
  bottom: 0;
  left: 0;
`
export const FunctionButton = styled.button`
  background-color: rgba(186, 255, 191, 0.3);
  padding: 3%;
  margin: 2px 0px;
  border: none;
  border-radius: 10px;
  font-family: Optima, sans-serif	;
`
export const SelectButton = styled.button`
  margin: 10px;
  padding: 10px;
  width: 40%;
  border: solid rgba(255, 255, 255, 0.0) 2px;
  border-radius: 10px;
`
export const Selected = styled(SelectButton)`
  background-color: pink;
  border: solid white 2px;
  border-radius: 10px;
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
  margin-bottom: 10%;
`
export const GoalButton = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.15)
  background: url('images/schmidt.png') no-repeat ;
`
export const GoalText = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Optima, sans-serif	;
  border-radius: 50%;
  border: none;
  text-align: center;
  flex-wrap: wrap;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.15)
`
export const Heading = styled.h1`
  text-align: center;
  font-family: Optima, sans-serif	;
`
export const Input = styled.input`
  margin: 2px 0px;
  font-family: Optima, sans-serif	;
  border-radius: 10px;
`
export const Scroll = styled.div`
  height: 500px;
  overflow: scroll;
`