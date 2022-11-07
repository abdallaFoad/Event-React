import styled from '@emotion/styled';
import theme from '../../../../../desigen-system/config';

export const Down = styled.div`
  label:Down;
  display:flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding:3rem 0 3rem 3rem;
`
export const Content = styled.div`
  label:Content;
  display:flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding:1rem;
  width:90%;
`
export const H1  = styled.h1`
  color:${theme.secondary};
  margin-bottom: 1.5rem;
  `
export const Span  = styled.span`
  color:${theme.gray};
  `
export const P  = styled.p`
  color:${theme.gray};
  font-size:1.2rem;
  margin-bottom: 1.5rem;
`
export const Button  = styled.button`
  label:Button;
  cursor:pointer;
  width:fit-content;
  background-color: ${theme.gray};
  color:${theme.whiteSmoke};
  border-radius: 2rem;
  margin-right: auto;
  padding: 0.6rem 2rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  transition: all .5s;
  :hover{
    background-color: ${theme.secondary};
  }
`