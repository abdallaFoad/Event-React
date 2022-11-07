import styled from '@emotion/styled';
import theme from '../../../../desigen-system/config';


export const FooterWrapper = styled.div`
  label:FooterWrapper;
  padding:3rem 0;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Span = styled.span`
  label:Span;
  color:${theme.secondary};
  font-weight:bold;
  font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
`
export const Social = styled.div`
  label:Social;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:3rem;
`
export const Link = styled.a`
  label:Link;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.white};
  width:40px;
  height:40px;
  border-radius: 50%;
  padding:1.5rem;
  transition: all .5s;
  :hover{
    background-color: ${theme.black};
  }
`