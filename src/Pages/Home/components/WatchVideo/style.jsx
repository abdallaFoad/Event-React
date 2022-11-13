import styled from '@emotion/styled';
import theme from 'yourStyled/config'


export const VideoSection = styled.div`
  label: VideoSection;
  padding:5rem 0;
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
  text-transform: uppercase;
`
export const FPara = styled.p`
  label: FPara;
  color:${theme.gray};
  font-size:1.1rem;
  line-height: 1.9;
`
export const IFram = styled.iframe`
  label: IFram;
  width:100%;
  height:100%;
  min-height:300px;
  border:3px solid ${theme.primary}
`