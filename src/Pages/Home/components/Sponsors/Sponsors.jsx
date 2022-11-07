import React from 'react'
import { Images, Sponsor } from './style'
import img1 from '../../../../shared/imags/sponsor-img1.jpg';
import img2 from '../../../../shared/imags/sponsor-img2.jpg';
import img3 from '../../../../shared/imags/sponsor-img3.jpg';
import img4 from '../../../../shared/imags/sponsor-img4.jpg';
import { H1, Span, P } from '../CreativeSpeakers/style';


export default function Sponsors() {
  return (
    <Sponsor>
      <H1>Our <Span>Sponsors</Span></H1>
      <P>Quisque rutrum. Aenean imperdiet. Quo neque error repudiandae fugas nisi vel augue.</P>
      <Images>
        <div>
          <img src={img1} alt="SponsorOne" style={{width:'100%'}}/>
        </div>

        <div>
          <img src={img2} alt="SponsorTwo" style={{width:'100%'}}/>
        </div>

        <div>
          <img src={img3} alt="SponsorThree" style={{width:'100%'}}/>
        </div>

        <div>
          <img src={img4} alt="SponsorFour" style={{width:'100%'}}/>
        </div>
      </Images>
    </Sponsor>
  )
}
