import React from 'react';
import styled from 'styled-components';

const Score = styled.h4 `
color: blue;
line-height: 0;
`
const WalkScore = ({walkscore, transitscore}) => (
<div>
    <Score> walk score {walkscore} </Score> 
    <Score>transit score {transitscore} </Score>
</div>
)

export default WalkScore;