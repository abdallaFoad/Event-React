import React from 'react'
import { VideoSection, FPara, H1, IFram } from './style'
import AboutImg from '../../../../shared/imags/about.jpg'
import Container from 'react-bootstrap/Container';

export default function WatchVideo() {
  return (
    <Container>
      <VideoSection>
        <div className="text">
          <H1>Watch Video</H1>
          <FPara>Uenean leo ligula, repudiandae fuga? Ipsa laudantium molestias eo consequat vitae, eleifend ac, 
  enim. Aliquam lorem ante, tellus.</FPara>
          <FPara> Luisque rutrum. Aenean imperdiet. Quo neque error repudiandae fuga? Ipsa laudantium molestias eo Etiam 
  ultricies nisi vel augue. Curabitur ullamcorper ultricies nisis.</FPara>
        </div>

        <div className="img">
          <IFram src="https://www.youtube.com/embed/XDPwXQjAlB0" frameborder="10"></IFram>
        </div>
        </VideoSection>
    </Container>
  )
}
