import React from 'react';
import axios from 'axios';
import NeighborSummary from './NeighborSummary.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            number: 0, 
            mapImage : '<img src="https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png" />',
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
    // handle success
    console.log(response.data[0].mapImage)
    this.setState ({
        number : response.data[1].neighborhood,
        mapImage: response.data[1].mapImage
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
// write function to use on click to show less neighborhoos details..
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
            <div className = 'foo'> 
            <h1>Neighborhood: {this.state.number}</h1>
            <NeighborSummary number = {this.state.number} /> 

                <label onClick = {this.onbuttonClick} style ={{color: 'blue'}}>{this.state.buttonText}</label>
                {this.state.buttonclicked === true && 
                <div>
                <h2> Neighborhood Map: </h2>
               <img src = {this.state.mapImage} />     
               </div>
               }

               <label onClick = {this.showLess} style ={{color: 'blue'}}>{this.state.seeLessText}</label> 


            </div>
        )
    }
}


export default App;