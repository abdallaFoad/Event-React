import styled from "@emotion/styled";
import img from '../../../../shared/imags/intro-bg.jpg';
import theme from '../../../../desigen-system/config'

export const Head = styled.div`
  label: Head;
  height:100vh;
  background: url(${img});
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment: fixed;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color:${theme.white};
  font-family:  sans-serif;
` 

export const History = styled.h3`
  label:History;
  margin-bottom: 60px;
  font-size: 24px;
`
export const Work = styled.h1`
  label:Work;
    margin-bottom: 40px;
    font-weight: bold;
    color: white;
`
export const Buttons = styled.div`
  label:Buttons;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:15px
`
export const LearnBtn = styled.button`
  label:LearnBtn;
  background-color: transparent;
  color: ${theme.white};
  border: 2px solid ${theme.white};
  border-radius:6px;
  font-size: .9rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 20px;
  transition: all .5s;
  :hover{
    color: ${theme.primary};
    background-color: ${theme.white};
  }
  `
  export const RegisterBtn = styled.button`
  label:RegisterBtn;
  background-color: ${theme.primary};
  color: ${theme.white};
  border: 2px solid ${theme.primary};
  border-radius:6px;
  font-size: .9rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 20px;
  transition: all .5s;
   :hover{
    border: 2px solid ${theme.white};
    background-color: transparent;
  }
`