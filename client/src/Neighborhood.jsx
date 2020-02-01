import React from 'react';
import axios from 'axios';
import NeighborSummary from './NeighborSummary.jsx'
import WalkScore from './WalkScore.jsx'
import styled from 'styled-components';
import Nearbyhomes from './Nearbyhomes.jsx';
import Nearbyhomestwo from './Nearbyhomestwo.jsx';
import Contactform from './Contactform.jsx';

//styled components
const Body = styled.div `
max-width: 500px;
margin: auto;
`
const Image = styled.img `
width: 510px;
`
const Title = styled.h1 `
border-bottom: 0.1px solid grey;
`
const Wide = styled.div `
padding:10px;
`
class App extends React.Component {
    constructor(props) {
         super(props)
        this.state ={
            number: 0, 
            mapImage : '<img src="https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png" />',
            walk_score:0,
            transit_score:0,
            price: 0,
            sqft:0,
            bedNumber:0,
            bathNumber:0,
            address: '',
            nearbyImage:'',
            buttonclicked: false,
            buttonText: 'see more neighborhood details',
            seeLessText: ''
        }
        this.getNeighborhoodNumber = this.getNeighborhoodNumber.bind(this);
        this.onbuttonClick = this.onbuttonClick.bind(this);
        this.showLess = this.showLess.bind(this)
    }
    
    //function to get data from the database 
getNeighborhoodNumber() {
    axios.get ('./listings')
    .then( (response)=>{
    console.log(response.data[1])
    //set new state
    this.setState ({
        number : response.data[1].neighborhood,
        mapImage: response.data[0].mapImage,
        walk_score: response.data[0].walk_score,
        transit_score: response.data[0].transit_score,
        price: response.data[0].price,
        sqft: response.data[0].sqft,
        bedNumber: response.data[0].bedNumber,
        bathNumber: response.data[0].bathNumber,
        address: response.data[0].bathNumber,
        nearbyImage: response.data[1].nearbyImage
    })
  })
  .catch( (error)=> {
    console.log(error);
  })
    }
    
componentDidMount(){
this.getNeighborhoodNumber();
}

//function to use on click to see more neighborhood details
onbuttonClick (event) {
    event.preventDefault();
    this.setState ({
    buttonclicked:true,
    buttonText: '',
    seeLessText: 'see less of neighborhood details'
})
}
// function to use on click to show less neighborhoos details..
showLess (event) {
    event.preventDefault();
    this.setState ({
        buttonclicked: false,
        buttonText: 'see more neighborhood details',
        seeLessText: '' 
    })
}
    render() {
        return (
            <Body> 
          
            <Title>Neighborhood: {this.state.number}</Title>
            <NeighborSummary number = {this.state.number} /> 
                <label onClick = {this.onbuttonClick} style ={{color: 'blue'}}>{this.state.buttonText}</label>
                {this.state.buttonclicked === true && 
                <div>
                <h2> Neighborhood Map: </h2>
               <Image src = {this.state.mapImage} /> 
                <WalkScore walkscore = {this.state.walk_score} transitscore = {this.state.transit_score}/>
                <h2>Nearby homes</h2>
                <div>
                    <Nearbyhomes images = {this.state.nearbyImage} />
                    <Wide></Wide>
                    <Nearbyhomestwo images = {this.state.nearbyImage} />
                </div>
               </div>
               }
               <label onClick = {this.showLess} style = {{color: 'blue'}}>{this.state.seeLessText}</label> 
               <Wide></Wide>
               <Contactform/>
            </Body>
        )
    }
}


export default App;