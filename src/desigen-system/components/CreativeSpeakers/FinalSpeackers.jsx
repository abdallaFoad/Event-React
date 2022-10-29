import React from 'react'
import CreativeSpeakers from './CreativeSpeakers'
import dataSpeakers from './dataCreativeSpeakers'

export default function FinalSpeakers() {
  return (
    <div>
       <div className="speakers" style={{display:'flex', gap: '20px'}}>
        {
          dataSpeakers.map((e) => {
            return (
              <CreativeSpeakers image={e.image} name={e.name} job={e.job} key={e.id} />
            )
          })
        }
      </div>
    </div>
  )
}
