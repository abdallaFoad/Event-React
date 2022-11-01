import React from 'react'
import { DivTaps, MainOur } from './style'
import Container from 'react-bootstrap/Container';
import { H1, P, Span } from '../CreativeSpeakers/style';
import Taps from './Taps';

export default function OurPrograms() {
  return (
    <MainOur>
      <Container>
        <H1>Our <Span>Programs</Span></H1>
        <P>Quisque rutrum. Aenean imperdiet. Quo neque error repudiandae fugas nisi vel augue.</P>
        <DivTaps>
          <Taps />
        </DivTaps>
      </Container>
    </MainOur>
  )
}
