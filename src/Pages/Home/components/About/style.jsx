import styled from '@emotion/styled';
import theme from '../../../../desigen-system/config'


export const AboutSection = styled.div`
  label: AboutSection;
  margin-top:3rem;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap:2rem;
  font-family:  sans-serif;
`
export const H1 = styled.h1`
  label: H1;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  color:${theme.secondary};
  line-height:1.6;
`
export const FPara = styled.p`
  label: FPara;
  color:${theme.gray};
  font-size:1.1rem;
  line-height: 1.9;
`
export const Img = styled.img`
  label: Img;
  width:100%;
`