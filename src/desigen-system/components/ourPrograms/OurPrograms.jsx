import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Clock, Head, Img, Place, RoomNum } from './style';

export default function OurPrograms({
  image,
  clockIcon,
  time,
  placeIcon,
  roomNumber,
  job,
  name,
  description }) {
  return (
    <>
      <Box className='all-box'>
        <Img className="img">
          <img src={image} alt="img" />
        </Img>

        <div className="content">
          <Head className="head">
            <Clock className="clock">
              <div className="icon"><FontAwesomeIcon icon={clockIcon} /></div>
              <div className="time">{time}</div>
            </Clock>

            <Place className="place">
              <div className="icon"><FontAwesomeIcon icon={placeIcon}/></div>
              <div className="address">Room <RoomNum>{roomNumber}</RoomNum></div>
            </Place>
          </Head>

          <h2>{job}</h2> 
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </Box>
    </>
  )
}
