import React from 'react';
// import styled from 'styled-components';

const NeighborSummary = ({number}) => (
 <div>
<h3>This is a seller's market</h3>
<p>There are more interested buyers than homes for sale.</p>
<h4>Neighborhood home value</h4>
<p><label style ={{color: 'blue'}}>{number} home values</label> have risen 0.2 % over the past 12 months.</p>
<h4>One-year prediction</h4>
<p>Zillow predicts the home values in label {number} will rise 0.1% in the next year. </p>
<h4>Median home comparison</h4>
<p>This home is valued 28.5% higher than the median home in {number} </p>
 </div>
)

export default NeighborSummary;