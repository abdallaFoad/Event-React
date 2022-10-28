import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React  from 'react'
import { Description, OverWrapper, Title } from './OverViewStyled'

export default function OverView({icon, title, description}) {
  return (
    <OverWrapper>
      <div><FontAwesomeIcon color='#4FA095' size='2x' icon={icon} /></div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverWrapper>
  )
}
