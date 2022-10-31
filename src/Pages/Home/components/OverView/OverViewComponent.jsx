import React from 'react'
import { Box, OverViewContainer } from './style'
import Container from 'react-bootstrap/Container';
import dataOverView from '../../../../desigen-system/components/overView/dataOverView';
import OverView from '../../../../desigen-system/components/overView/overView';


export default function OverViewComponent() {
  return (
    <OverViewContainer>
      <Container>
        <Box>
          {
            dataOverView.map((e) => {
              return (
                <div className='box'>
                <OverView icon={e.icon} title={e.title} description={e.description} key={e.id} />
              </div>
            )
            })
          }
        </Box>
      </Container>
    </OverViewContainer>
  )
}
