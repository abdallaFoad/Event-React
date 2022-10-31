import React from 'react'
import { H1, P, Span, SpeakersContent } from './style'
import Container from 'react-bootstrap/Container'
import Swapper from './Swapper'
export default function CreativeSpeakers() {
  return (
    <SpeakersContent>
      <Container>
        <H1>Creative <Span>Speakers</Span></H1>
        <P>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
        <Swapper />
      </Container>
    </SpeakersContent>
  )
}
