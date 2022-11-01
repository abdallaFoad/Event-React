import styled from "@emotion/styled";
import theme from "../../config";

export const Box = styled.div`
  label:Box;
  display:flex;
  gap:10%;
  padding:1rem 0;
`
export const Img = styled.div`
  label:Img;
  overflow: hidden;
`
export const Head = styled.div`
  label:Head;
  display:flex;
  gap:50px
`

export const Place = styled.div`
  label:Place;
  display:flex;
  gap:10px;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const Time = styled.div`
  label:Time;
  color:${theme.red};
  font-size:1.2rem;
  font-weight: 500;
  `
export const Icon = styled.div`
  label:Icon;
  color:${theme.red};
  `
  export const RoomNum = styled.span`
  label:RoomNum;
  font-weight: bold;
  color:${theme.red};
  
`
  export const H2 = styled.h2`
  label:H2;
  color:${theme.red};
  `
  export const Name = styled.div`
  lable: Name;
  color:${ theme.gray };
  font-weight: 500;
  font-size:1.1rem;
  margin-bottom: 2rem;
  `
  export const P = styled.p`
  label: P;
  font-size:1rem;
  color:${theme.gray}
  
`