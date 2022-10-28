import React from 'react'
import { Image, Job, Name, Speaker } from './style'

export default function CreativeSpeakers({image, name, job}) {
  return (
      <Speaker>
        <Image src={image} alt="img" />
        <div className="data">
          <Name>{name}</Name>
          <Job>{job}</Job>
        </div>
      </Speaker>
  )
}
