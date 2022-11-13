import styled from '@emotion/styled'
import theme from 'yourStyled/config'
export const OverWrapper = styled.div`
  label: overWrapper;
  width:300px;
  text-align: center;
  font-family: sans-serif;
  margin: 0 auto;
`
export const Title = styled.h2`
  label: Title;
  color:${theme.white}
`
export const Description = styled.h2`
  label: Description;
  color:${theme.gray};
  font-size:1.2rem;
  line-height:1.6
`