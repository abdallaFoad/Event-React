import React from 'react'
import dataSponsors from './dataSponsors';
import OurSponsors from './OurSponsors'
import { BoxImg } from './style';

export default function FinalSponsors() {
  return (
    <BoxImg style={{display:'flex'}}>
    {
      dataSponsors.map((e) => {
        return (
          <OurSponsors img={e.img} alt={e.alt} key={e.id} />
        );
      })
    }
    </BoxImg>
  )
}
