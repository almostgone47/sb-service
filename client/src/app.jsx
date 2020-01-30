import React from 'react';
import axios from 'axios';



class App extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            value:''
        }
    }
componentDidMount(){
axios.get ('./listings')
.then( (response)=>{
    // handle success
  
    this.setState ({
        value : response.data[0].walk_score
    })
  })
  .catch( (error)=> {
    // handle error
    console.log(error);
  })
}

    render() {
   
        return (
            <div className = 'foo'> 
         hello world
            </div>
        )
    }
}



export default App;