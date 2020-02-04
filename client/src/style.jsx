import styled from 'styled-components';

//Neighborhood
export const Body = styled.div `
max-width: 500px;
margin: auto;
`
export const Image = styled.img `
width: 510px;
`
export const Svg = styled.svg `
fill: white;
background-color:#346eeb;
vertical-align: middle;
width: 30px;
height:30px;
margin-left: 0px;
border-radius: 50%;
margin-top:2px
`
export const Label = styled.label `
cursor: pointer
`
export const Para = styled.p `
letter-spacing: 0.3px;
margin-left:2px;
&:hover {
    opacity: 0.6;
    }
`
export const Span = styled.span `
margin: 7px
`
export const Title = styled.h1 `
font-family: 'Notable', sans-serif;
border-bottom: 0.1px solid silver;
font-weight: normal;
color: #000000;
padding: 10px;
letter-spacing: 1px;
`
export const Wide = styled.div `
padding:8px;
`

//Nearbyhomes

export const Container = styled.div `
display: flex;
`
export const SpanOne = styled.span `
width:250px;
border-right: 0.2px solid silver;
border-left: 0.2px solid silver;
border-bottom: 3px solid #346eeb;
flex: 1 1 auto;
cursor: pointer;
`
export const ImageNearby = styled.img `
width: 250px;
`

export const Para_nearby = styled.div `
line-height: 7px;
font-size: 12px;
font-style: 'Ariel';
`

//Walkscore
export const SpanWalkscore = styled. span `
color: black;
font-weight: normal;
font-size: 13px;
&:hover {
  opacity: none;
  }
`
export const WalkscoreDiv = styled.div `
color: #346eeb;
line-height: 0;
font-weight: 0;
cursor: pointer;
`
export const Score = styled.h4 `
&:hover {
  opacity: 0.6;
  }
`
//NeighborhoodSummary

export const Line = styled.h4 `
cursor: pointer;
color: #121212;
`
export const NeighborDiv = styled.div `
Line-height: 0;
padding: 4px;
`
export const SummaryPara = styled.p `
color : #242625
`
export const Price = styled.span `
margin-left: 250px;
`
export const Zestimate = styled.span `
border-bottom: dotted;
border-color:silver;
`

//Tooltip
export const Message = styled.div `
background: black;
border-radius: 3px;
color: white;
font-size: .75rem;
line-height: 1.4;
padding: .75em;
text-align: center;
`
export const Bubble = styled.span `
min-width: 120px;
max-width: 210px;
position: absolute;
top: 100%;
  left: 40%;
  padding-top: 9px;
  transform: translateX(-100%);
&::after {
  content: '';
  position: absolute;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid black;
  top: 0%;
  left: 50%;
  transform: translateX(-100%);
}
`
export const Ttip = styled.div `
  position: relative;
`