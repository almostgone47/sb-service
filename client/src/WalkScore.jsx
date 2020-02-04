import React from 'react';
import {SpanWalkscore, WalkscoreDiv, Score} from './style.jsx'


const WalkScore = ({walkscore, transitscore, showTooltip, showdisplayTransit}) => (
<WalkscoreDiv>
    <Score onClick = {showTooltip}> 
   Walk Score &reg;  {walkscore} 
  <SpanWalkscore>(Very Walkable)</SpanWalkscore> 
        </Score>
        <Score onClick= {showdisplayTransit}>	
        Transit Score &trade;  {transitscore}
        <SpanWalkscore>(Good Transit)</SpanWalkscore> 
        </Score>
</WalkscoreDiv>
)

export default WalkScore;