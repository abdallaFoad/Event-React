import styled from '@emotion/styled';
import img from 'images2/venue-bg.jpg';
import theme from 'yourStyled/config';


export const ParentVenue = styled.div`
  label:ParentVenue;
  `
export const Img = styled.div`
  label:Img;
  background-image:url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  z-index:-1;
  width:100%;
  padding:3rem 0;
  `
export const Content = styled.div`
  label:Content;
  padding:5rem 0;
  width:50%;
`
export const H1 = styled.h1`
  label:H1;
  color:${theme.gray};
  margin-bottom:2rem;
`
export const P = styled.p`
  label:p;
  font-size: 1.1rem;
  color:${theme.active};
  line-height:1.3
`
export const Foot = styled.div`
  label:Foot;
  margin-top:2rem;
  color:${theme.black};
  font-weight:bold;
`
export const FootP = styled.p`
  label:FootP;
  margin-top: 0; 
  margin-bottom: 0;
  line-height:1.5;

`