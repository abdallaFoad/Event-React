import React from 'react'
import dataOverView from './dataOverView'
import OverView from './overView'

export default function FinalOverView() {
  return (
    <div>
      <div className='overView' style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
         {
          dataOverView.map((e) => {
          return (
            <div className='box'>
              <OverView icon={e.icon} title={e.title} description={e.description} key={e.id} />
            </div>
           )
          })
        }
      </div>
    </div>
  )
}
