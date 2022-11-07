import React from 'react'
import { FooterWrapper, Link, Social, Span } from './style'
import { P } from '../ContactUs/Download/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <FooterWrapper>
      <P>Copyright 	&#169; 2020 Your Company | Design <Span>Abdalla Foad</Span></P>
      <Social>
        <Link
          href="https://www.facebook.com/abdalla.foad.50" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} size={'2x'} color={'#1877F2'} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdofoad1179674/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} size={'2x'} color={'#0e76a8'}/>
        </Link>
        <Link
          href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR1PuxUuY1Po5h7qefYkmE8FKCyvGQ38Bey3cXBjaK_fmiok34mrWbR8sio" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size={'2x'} color={'#E4405F'}/>
        </Link>
        <Link
          href="https://twitter.com/abdallafoad74?fbclid=IwAR3GwLItlfMdhL6i3QyUUEs8_ZEnRkDPmpuTeTKx4lFA5dWqcLLyAS9Ymzw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size={'2x'} color={'#1DA1F2'}/>
        </Link>
      </Social>
    </FooterWrapper>
  )
}
