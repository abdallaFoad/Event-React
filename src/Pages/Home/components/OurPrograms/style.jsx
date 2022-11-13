import styled from "@emotion/styled";
import theme from "yourStyled/config";

export const MainOur = styled.div`
  label:MainOur;
  padding:5rem 0;
`
export const DivTaps = styled.div`
  label:DivTaps;
  padding:1rem 0;
`
export const ParTaps = styled.div`
  label:ParTaps;
  display:flex;
  gap:2rem;
  margin:0;
  padding:0;
  `
export const TSpan = styled.div`
  label:TSpan;
  font-size:1.2rem;
  font-weight:bold;
  cursor: pointer;
  position:relative;
  color:${theme.black};
  transition:0.3s;
  height:60px;
  :hover{
    color:${theme.gray};
    border-bottom: 1px solid ${theme.red};
  }
`
export const Line = styled.div`
  label:Line;
  width:80%;
  position:absolute;
  height:1px;
  background-color: ${theme.black};
  /* margin-top:2rem; */
`
export const ConTaps = styled.div`
  label:ConTaps;
  padding-top:3rem
`