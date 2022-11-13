import React, { useState } from 'react'
import { dataOurPrograms1, dataOurPrograms2, dataOurPrograms3 } from '../../../../desigen-system/components/ourPrograms/dataOurPrograms';
import OurPrograms from 'yourStyled/components/ourPrograms/OurPrograms';
import theme from 'yourStyled/config';
import { ConTaps, Line, ParTaps, TSpan } from './style'

export default function Taps() {
  const [taps, setTaps] = useState('tap1');

  const switchTaps = (tap) => {
    setTaps(tap)
  }

  return (
    <>
      <ParTaps>
        <TSpan
          style={{
            color: taps === 'tap1' ? `${theme.primary}` : '',
            borderBottom: taps === 'tap1' ? `1px solid ${theme.primary} ` : ''
          }}
          onClick={() => switchTaps('tap1')}>First Day</TSpan>
        <TSpan
          style={{
            color: taps === 'tap2' ? `${theme.primary}` : '',
            borderBottom: taps === 'tap2' ? `1px solid ${theme.primary} ` : ''
          }}
          onClick={() => switchTaps('tap2')}>Second Day</TSpan>
        <TSpan
          style={{
            color: taps === 'tap3' ? `${theme.primary}` : '',
            borderBottom: taps === 'tap3' ? `1px solid ${theme.primary} ` : ''
          }}
          onClick={() => switchTaps('tap3')}>Third Day</TSpan>
      </ParTaps>
      <Line></Line>
      <ConTaps>
        {
          taps === 'tap2' ? 
            dataOurPrograms2.map((e) => {
              return (
                <OurPrograms image={e.image} clockIcon={e.clockIcon} time={e.time} placeIcon={e.placeIcon} roomNumber={e.roomNumber} job={e.job} name={e.name} description={e.description} />
              )
            }) : 
            taps === 'tap3' ?
            dataOurPrograms3.map((e) => {
              return (
                <OurPrograms image={e.image} clockIcon={e.clockIcon} time={e.time} placeIcon={e.placeIcon} roomNumber={e.roomNumber} job={e.job} name={e.name} description={e.description} />
              )
            }) : 
            dataOurPrograms1.map((e) => {
            return (
                <OurPrograms image={e.image} clockIcon={e.clockIcon} time={e.time} placeIcon={e.placeIcon} roomNumber={e.roomNumber} job={e.job} name={e.name} description={e.description} />
              )
            })
        }
      </ConTaps>
    </>
  )
}
