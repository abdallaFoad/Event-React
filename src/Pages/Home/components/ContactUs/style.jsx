import styled from '@emotion/styled';
import img from '../../../../shared/imags/contact-bg.jpg'
export const Img = styled.div`
  label:Img;
  background-image:url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  z-index:-1;
  width:100%;
  margin:3rem 0;
  padding:3rem 0;
  `

export const Content = styled.div`
  label:Content;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  justify-content: flex-end;
  align-items: center;
  gap:3rem;
`