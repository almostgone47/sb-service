import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            number: ['https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png']
        }
        // this.getNeighborhoodNumber = this.getNeighborhoodNumber.bind(this)
    }
    getNeighborhoodNumber() {
        axios.get ('./listings')
.then( (response)=>{
    // handle success
//   console.log(response.data[0].neighborhood)
    this.setState ({
        number : response.data[1].neighborhood
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
          
            </div>
        )
    }
}



export default App;