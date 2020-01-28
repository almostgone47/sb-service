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
    console.log(response.data);
    this.setState ({
        value : response.data
    })
  })
  .catch( (error)=> {
    // handle error
    console.log(error);
  })
}


    render() {
        return (
            <div> 
         
            </div>
        )
    }
}



module.exports = App;