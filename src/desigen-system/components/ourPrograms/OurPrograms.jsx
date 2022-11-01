import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, H2, Head, Img, Name, P, Place, RoomNum, Time } from './style';
import theme from '../../config';

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
      <Box>
        <Img className="img">
          <img style={{ width: '100%', borderRadius:'50%'}} src={image} alt="img" />
        </Img>

        <div className="content">
          <Head className="head">
            <Place className="clock">
              <div className="icon"><FontAwesomeIcon color={theme.red} icon={clockIcon} /></div>
              <Time>{time}</Time>
            </Place>

            <Place className="place">
              <div className="icon"><FontAwesomeIcon color={theme.red} icon={placeIcon}/></div>
              <Time className="address">Room <RoomNum>{roomNumber}</RoomNum></Time>
            </Place>
          </Head>

          <H2>{job}</H2> 
          <Name>{name}</Name>
          <P>{description}</P>
        </div>
      </Box>
    </>
  )
}
