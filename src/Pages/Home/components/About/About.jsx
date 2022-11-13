import React from 'react'
import { AboutSection, FPara, H1, Img } from './style'
import AboutImg from 'images2/about.jpg'
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
  <Container>
    <AboutSection>
      <div className="text">
        <H1>New Event is a fully responsive one-page template for events, conference workshop</H1>
        <FPara>Aenean leo ligula, repudiandae fuga? Ipsa laudantium molestias eo consequat vitae, eleifend ac, 
enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</FPara>
        <FPara> Quisque rutrum. Aenean imperdiet. Quo neque error repudiandae fuga? Ipsa laudantium molestias eo Etiam 
ultricies nisi vel augue. Curabitur ullamcorper ultricies nisis.</FPara>
      </div>

      <div className="img">
        <Img src={AboutImg} alt="ImgAbout" />
      </div>
      </AboutSection>
    </Container>
  )
}
