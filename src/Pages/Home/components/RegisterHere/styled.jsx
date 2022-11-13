import styled from '@emotion/styled';
import img from 'images2/register-bg.jpg';
import theme from 'yourStyled/config';


export const RegisterCon = styled.div`
  label: RegisterCon;
  background-image: url(${img});
  background-size:cover;
  background-attachment: fixed;
  background-repeat:no-repeat;
  min-height:100vh;
  width:100%;
  z-index:-1;
`

export const Content = styled.div`
  label:Content;
  display:flex;
  gap:5%;
  color:white;
  padding:7rem 0;
  flex-wrap:wrap
`
export const Text = styled.div`
  label:Text;
  flex-basis:65%;
  @media (max-width:768px){flex-basis:100%}
`

export const H1 = styled.h1`
  label:H1;
  color:${theme.whiteSmoke};
  line-height:1;
  margin-bottom:2rem;
  `
  export const Span = styled.span`
  label:Span;
  color:${theme.gray};
  `
  export const H3 = styled.h3`
    label:H1;
    font-size: 1.1rem;
    margin-bottom:1.3rem;
    line-height:1.5
    `
    export const Para = styled.p`
    label:Para;
    line-height:1.5;
    font-size: 1rem;
    color:${theme.gray}
  `



  export const Form = styled.form`
  label:Form;
  flex-basis:30%;
  @media (max-width:768px){flex-basis:100%;margin-top:3rem};
  display:flex;
  gap:1.1rem;
  flex-direction: column;

`
  export const Input = styled.input`
  label:Input;
  border:1px solid ${theme.whiteSmoke};
  background: transparent;
  :focus{border:1px solid ${theme.whiteSmoke};outline:2px dotted ${theme.whiteSmoke}};
  width:100%;
  padding:.5rem;
  border-radius: 6px;
  caret-color:${theme.white};
  color:${theme.white}
`
  export const Submit = styled.input`
  label:Submit;
  cursor:pointer;
  width:fit-content;
  background-color: ${theme.primary};
  color:${theme.whiteSmoke};
  border-radius: 2rem;
  margin-left: auto;
  padding: 0.6rem 2rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all .5s;
    :hover{
    background-color: ${theme.whiteSmoke};
    color:${theme.secondary}
  }
`