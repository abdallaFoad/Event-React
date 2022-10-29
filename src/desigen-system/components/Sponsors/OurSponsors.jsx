import React from 'react'
import { Img } from './style'

export default function OurSponsors({img, alt}) {
  return (
    <div>
      <Img src={img} alt={alt} />
    </div>
  )
}
