import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
display: flex;
`
const SpanOne = styled.span `
width:250px;
border-right: 0.2px solid grey;
border-left: 0.2px solid grey;
border-bottom: 3px solid blue;
flex: 1 1 auto;
`

const Wide = styled.div `
padding:10px;
`
const Image = styled.img `
width: 250px;
`

const Para = styled.p `
line-height: 7px;
font-size: 12px;
font-style: 'Ariel';
`


const Nearbyhomestwo = ({images}) => (

<Container className = 'nearbyhomes'>

  <SpanOne >
    <Image src = {images} />
    <Para>
    {'$1,577,876'}
<p>{`355 Bryant St Unit 209, San Francisco, CA 94107`}</p>
<p>{` 1 bd  `}{` 1ba  `}{` 2k sqft`}</p>
    </Para>
  </SpanOne>

  <Wide></Wide>

  <SpanOne>
    <Image src = {images} />
    <Para>
      {'$1,633,946'}
<p>{`355 Bryant St Unit 209, San Francisco, CA 94107`}</p>
<p>{` 1 bd  `}{` 1ba  `}{` 1.5k sqft`}</p>
    </Para>
  </SpanOne>

  <Wide></Wide>

</Container>

)

export default Nearbyhomestwo;