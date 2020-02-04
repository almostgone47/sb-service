import React from 'react';
import {Container, SpanOne, Wide, ImageNearby, Para_nearby} from './style.jsx'

const Nearbyhomes = ({images}) => (

<Container className = 'nearbyhomes'>

  <SpanOne >
    <ImageNearby src = {images[0]} />
    <Para_nearby>
    {'$1,577,876'}
<p>{`355 Bryant St Unit 209, San Francisco, CA 94107`}</p>
<p>{` 1 bd  `}{` 1ba  `}{` 2k sqft`} </p>
    </Para_nearby>
  </SpanOne>

  <Wide></Wide>

  <SpanOne>
    <ImageNearby src = {images[0]} />
    <Para_nearby>
      {'$1,633,946'}
<p>{`355 Bryant St Unit 209, San Francisco, CA 94107`} </p>
<p>{` 1 bd  `}{` 1ba  `}{` 1.5k sqft`}</p>
    </Para_nearby>
  </SpanOne>

  <Wide></Wide>

</Container>
)

export default Nearbyhomes;