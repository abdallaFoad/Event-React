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
  @media (max-width: 786px) {
    width:30%
  }
  @media (min-width: 787px) and (max-width:991px) {
    width:50%
  }
  @media (min-width: 992px) and (max-width:1199px) {
    width:75%
  }

`
export const Name = styled.div`
  label: Name;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color:${theme.gray};
  padding:5px;
    @media (max-width: 786px) {
    font-size:1rem;
  }
  @media (min-width: 787px) and (max-width:991px) {
    font-size:1.1rem;
  }
  
  `
  export const Job = styled.div`
  label: Job;
  font-size:.9rem;
  font-weight: bold;
  color:${theme.white};
  padding:5px;
  @media (max-width: 786px) {
    font-size:.5rem
  }
  
`