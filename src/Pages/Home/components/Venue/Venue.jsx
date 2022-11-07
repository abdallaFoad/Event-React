import React from 'react'
import { Content, Foot, FootP, H1, Img, P, ParentVenue } from './style'
import Container from 'react-bootstrap/Container';

export default function Venue() {
  return (
      <Img>
        <Container>
          <Content>
            <H1>Venue</H1>
            <P>Lorem ipsum dolor sit amet Quibusdam  eaque soluta dolor debitis harum  nemo inventore? Nobis minima maiores laborum veritatis, eaque non id rem quibusdam dicta omnis?</P>
            <Foot>
              <FootP>New Event</FootP>
              <FootP>120 Market Street, Suite 232</FootP>
              <FootP>San Francisco, CA 101110</FootP>
              <FootP>Tel- 010-200-3654</FootP>
            </Foot>
          </Content>
        </Container>
      </Img>

  )
}
