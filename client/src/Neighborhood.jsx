import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            number: 0, 
            mapImage :  '<img src="https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png" />'
        }
        this.getNeighborhoodNumber = this.getNeighborhoodNumber.bind(this)
    }
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
    // handle error
    console.log(error);
  })
    }
componentDidMount(){
this.getNeighborhoodNumber();
}

    render() {
        return (
            <div className = 'foo'> 
            <h1>Neighborhood: {this.state.number}</h1>
            <h2> Neighborhood Map:
                <img src = {this.state.mapImage} /> </h2>
            </div>
        )
    }
}


export default App;