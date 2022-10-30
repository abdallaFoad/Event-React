import React from 'react'
import { Buttons, Head, History, LearnBtn, RegisterBtn, Work } from './style'

export default function Header() {
  return (
    <Head>
      <History>July 22 - 26 in, San Francisco, CA</History>
      <Work>Web Design Conference</Work>
      <Buttons className="buttons">
        <LearnBtn>Learn More</LearnBtn>
        <RegisterBtn>Register Now</RegisterBtn>
      </Buttons>
    </Head>
  )
}
