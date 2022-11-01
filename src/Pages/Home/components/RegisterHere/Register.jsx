import React from 'react'
import { Content, Form, H1, H3, Input, Para, RegisterCon, Span, Submit, Text } from './styled'
import Container from 'react-bootstrap/Container';

export default function Register() {
  const preventDefault = (e) => {e.preventDefault()}
  return (
      <RegisterCon>
        <Container>
          <Content>
            <Text>
              <H1>Register <Span>Here</Span></H1>
              <H3>Numquam blanditiis harum quisquam eius eaque rerum! Provident similique sed eaque rerum! Provident similique</H3>
              <Para>Luisque rutrum. Aenean imperdiet laudantium  nisi . Quo neque error molestias eo Etiam ultricies nisi  . Quo neque error repudiandae fuga? Aenean imperdiet laudantium Ipsa laudantium molestias eo Etiam ultricies nisi vel augue.</Para>
            </Text>
            <Form onSubmit={preventDefault}>
              <Input
                type="text"
                name="fName"
                id="fName"
                placeholder='First Name'
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "First Name"}
              />
              <Input
                type="text"
                name="sName"
                id="sName"
                placeholder='Second Name'
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Second Name"}
              />
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder='Mobil Phone'
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Mobil Phone"}
              />
              <Input
                type="text"
                name="email"
                id="regEmail"
                placeholder='Email Address'
                onFocus={(e) => e.target.placeholder = ""}
                onBlur={(e) => e.target.placeholder = "Email Address"}
              />
              <Submit type="submit" value='Register' name="regSubmit" id="regSubmit" />
            </Form>
          </Content>
        </Container>
      </RegisterCon>
  )
}
