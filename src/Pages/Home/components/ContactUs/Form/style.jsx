import styled from '@emotion/styled';
import theme from 'yourStyled/config';

export const FormStyle = styled.div`
  label:Form;
  padding:3rem 3rem 3rem 0;
  display:flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media(max-width:768px){
    align-items: center;
    justify-content:center;
  }
`
export const Content = styled.form`
  label:Content;
  border-radius:2rem;
  background-color: ${theme.whiteSmoke};
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:90%;
  padding:2rem;
`
export const Input = styled.input`
  label:Input;
  border:none;
  outline: none;
  padding:1rem;
  margin-bottom: 1rem;
  width:100%;
  background-color: ${theme.whiteSmoke};
`
export const Button  = styled.button`
  label:Button;
  cursor:pointer;
  width:fit-content;
  background-color: ${theme.black};
  color:${theme.whiteSmoke};
  border-radius: 2rem;
  margin-right: auto;
  margin-left:1rem;
  margin-bottom:3rem;
  padding: 0.6rem 3rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  transition: all .5s;
  :hover{
    background-color: ${theme.secondary};
  }
`