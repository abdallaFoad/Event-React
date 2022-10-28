import styled from "@emotion/styled";
import theme from "../../config";

export const Speaker = styled.div`
  label: Speaker;
  width: 280px;
  font-family: Arial, Helvetica, sans-serif;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`


export const Image = styled.img`
  label: Image;
  width: 100%;
  
`
export const Name = styled.div`
  label: Name;
  font-size: 23px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color:${theme.gray};
  padding:5px
  
  `
  export const Job = styled.div`
  label: Job;
  font-size:12px;
  font-weight: bold;
  color:${theme.white};
  padding:5px
  
`