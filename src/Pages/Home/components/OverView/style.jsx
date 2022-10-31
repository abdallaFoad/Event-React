import styled from '@emotion/styled';
import theme from '../../../../desigen-system/config'


export const OverViewContainer = styled.div`
  label:OverViewContainer;
  padding:5rem 0;
  background-color:${theme.black};
  `
export const Box = styled.div`
  label:Box;
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap:20px;
  align-items:center;
  justify-content:center;
  align-items: center;
  margin:0 auto;
`