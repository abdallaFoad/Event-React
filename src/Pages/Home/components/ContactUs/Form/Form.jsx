import React from 'react'
import { Button, Content, FormStyle, Input } from './style';
import {H1, Span} from '../Download/style'

export default function Form() {
  return (
    <FormStyle>
      <Content>
        <H1 style={{marginRight:'auto', padding:'3rem 0 0 1rem'}}>Keep In <Span>Touch</Span></H1>
        <Input
          type="text"
          name="name"
          placeholder='Name'
          onFocus={(e) => e.target.placeholder=('')}
          onBlur={(e) => e.target.placeholder=('Name')}
        />
        <Input
          type="text"
          name="email"
          placeholder='Email'
          onFocus={(e) => e.target.placeholder=('')}
          onBlur={(e) => e.target.placeholder=('Email')}
        />
        <Input
          type="text"
          name="message"
          placeholder='Message'
          onFocus={(e) => e.target.placeholder=('')}
          onBlur={(e) => e.target.placeholder = ('Message')}
          style={{paddingBottom: '3rem'}}
        />
        <Button>Send</Button>
      </Content>
    </FormStyle>
  )
}
