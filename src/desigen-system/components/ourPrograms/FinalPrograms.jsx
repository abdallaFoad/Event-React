import React from 'react'
import dataOurPrograms from './dataOurPrograms'
import OurPrograms from './OurPrograms'


export default function FinalPrograms() {
  return (
    <div>
      <div className="ourPrograms">
        {
          dataOurPrograms.map((e) => {
            return (
              <OurPrograms image={e.image} clockIcon={e.clockIcon} time={e.time} placeIcon={e.placeIcon} roomNumber={e.roomNumber} job={e.job} name={e.name} description={e.description} />
            )
          })
        }
      </div>
    </div>
  )
}
