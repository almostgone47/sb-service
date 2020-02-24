import React from 'react';
import axios from 'axios';
import NeighborSummary from './NeighborSummary.jsx';
import Nearbyhomes from './Nearbyhomes.jsx';
import Nearbyhomestwo from './Nearbyhomestwo.jsx';
import Tooltip from './Tooltip.jsx';
import {Body, Image, Svg, Label, Para, Span, Title, Wide, WalkButton, TransitButton} from './style.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0, 
            mapImage : '<img src="https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse1.png" />',
            buttonclicked: false,
            buttonText: 'See more neighborhood details',
            svgIconMore: <Svg ><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></Svg>,
            svgIconMore_nearby: '',
            svgiconLess_neayby: '',
            svgIconLess: '',
            seeLessText: '',
            nearbyhouse: '',
            nearbyhouseless: '',
            nearbyButtonMore: false,
            nearbyButtonLess: false,
            walkScoremessage: '',
            transitScoremessage: '',
            currListing: '',
            nearbyHomes: []
        }
        this.getListing = this.getListing.bind(this);
        this.onbuttonClick = this.onbuttonClick.bind(this);
        this.showLess = this.showLess.bind(this)
        this.onnearbyhouseClick = this.onnearbyhouseClick.bind(this);
        this.showLessnearbyhouse = this.showLessnearbyhouse.bind(this);
        this.getNearbyHouses = this.getNearbyHouses.bind(this);
    }
    
    //function to get listing being looked at from the database 
    getListing() {
        axios.get ('/listing/9069232')
        .then((response) => {
            this.setState ({
                currListing: response.data[0]
            })
        })
        .then(() => {
            this.getNearbyHouses();
        })
        .catch( (error)=> {
            console.log('getListings client side error: ', error);
        })
    }
    // gets nearby houses
    getNearbyHouses() {
        axios.get(`/nearbyHouses?id=${this.state.currListing.neighborhood_id}`)
        .then ((response) => {
            this.setState({
                nearbyHomes: response.data
            })
        })
        .catch((err) => {
            console.log('Error getting nearby houses: ', err)
        })
    }

    componentDidMount() {
        this.getListing();
    }

    //function to use on click to see more neighborhood details
    onbuttonClick (event) {
        event.preventDefault();
        this.setState ({
            buttonclicked:true,
            buttonText: '',
            svgIconMore: '',
            svgiconLess_neayby: '',
            svgIconMore_nearby: <Svg ><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></Svg>,
            svgIconLess: <Svg ><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></Svg>,
            seeLessText: 'See less neighborhood details',
            nearbyhouse: 'See more nearby house',
            nearbyButtonMore: false,
            nearbyhouseless: '',
            nearbyButtonLess: false
        })
    }
    // function to use on click to show less neighborhoos details..
    showLess (event) {
        event.preventDefault();
        this.setState ({
            buttonclicked: false,
            buttonText: 'See more neighborhood details',
            svgIconMore: <Svg ><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></Svg>,
            seeLessText: '' ,
            svgIconLess: '',
            nearbyhouse: '',
            nearbyButtonMore: false,
            nearbyButtonLess: false
        })
    }

    onnearbyhouseClick (event) {
        event.preventDefault();
        this.setState({
            buttonclicked:true,
            buttonText: '',
            svgIconMore: '',
            svgIconMore_nearby: '',
            svgiconLess_neayby: <Svg ><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></Svg>,
            svgIconLess: <Svg ><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></Svg>,
            seeLessText: 'See less neighborhood details',
            nearbyhouse: '',
            nearbyhouseless: 'See less nearby houses',
            nearbyButtonMore: true,
            nearbyButtonLess: false
        })
    }
    // function to use on click to show less neighborhoos details..
    showLessnearbyhouse (event) {
        event.preventDefault();
        this.setState ({
            buttonclicked: true,
            buttonText: '',
            svgIconMore: '',
            svgiconLess_neayby: '',
            svgIconMore_nearby: <Svg ><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></Svg>,
            seeLessText: 'See less neighborhood details',
            svgIconLess: <Svg ><path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z"/></Svg>,
            nearbyhouse: 'See more nearby houses',
            nearbyhouseless: '',
            nearbyButtonMore: false,
            nearbyButtonLess: true
        })
    }

    render() {
        const listing = this.state.currListing;
        const nearbyHomes = this.state.nearbyHomes;
        return (
            <Body> 
                <Title>Neighborhood: {this.state.number}</Title>
                <NeighborSummary number={this.state.number} /> 
                <Label onClick={this.onbuttonClick} style={{color: '#346eeb'}}>
                    <Para>
                        {this.state.svgIconMore} 
                        <Span>{this.state.buttonText}</Span>
                    </Para>
                </Label>
                {this.state.buttonclicked === true && 
                <div>
                    <h2> Neighborhood Map: </h2>
                <Image src={this.state.mapImage} />
                
                <Tooltip message = 
                    {<div>
                        <h4>WHAT IS A WALK SCORE?</h4>
                        <p>Walk Score measures how walkable an address is based on the distance to nearby amenities.</p>
                        <WalkButton>Learn how it works</WalkButton>
                        <Wide></Wide>
                        <TransitButton>See detailed Walk score rating</TransitButton>
                        </div>
                        }
                        messageTransit = {
                            <div>
                                <h4> WHAT IS A TRANSIT SCORE?</h4>
                                <p>Transit Score measures how walkable an address is based on the distance to nearby amenities.</p>
                                <WalkButton>Learn how it works</WalkButton>
                                <TransitButton>See detailed Walk score rating</TransitButton>
                    </div>}
                    walkscore={listing.walk_score} transitscore={listing.transit_score} />
                    <h2>Nearby homes</h2>
                    <div>
                        <Nearbyhomes images={nearbyHomes[0].images}  address={nearbyHomes[0].address}/>
                        <Wide> </Wide>
                        <Nearbyhomestwo images={nearbyHomes[1].images} address={nearbyHomes[1].address}/>
                    </div>
            
                    <Label onClick={this.onnearbyhouseClick} style={{color: '#346eeb'}}>
                        <Para>
                            {this.state.svgIconMore_nearby} 
                            <Span>{this.state.nearbyhouse}</Span>
                        </Para>
                    </Label>
                    {this.state.nearbyButtonMore === true &&
                        <div>
                            <Nearbyhomes images={nearbyHomes[2].images}  address={nearbyHomes[2].adress}/>
                            <Wide> </Wide>
                            <Nearbyhomestwo images={nearbyHomes[3].images} address={nearbyHomes[3].address}/>
                        </div>
                    }
                    <Label onClick= {this.showLessnearbyhouse} style = {{color: '#346eeb'}}>
                        <Para>
                            {this.state.svgiconLess_neayby}
                            <Span>{this.state.nearbyhouseless}</Span>
                        </Para>
                    </Label>
               </div>
               }
               <Label onClick = {this.showLess} style = {{color: '#346eeb'}}>
                    <Para>
                        {this.state.svgIconLess}
                       <Span>{this.state.seeLessText}</Span> 
                    </Para>
                </Label> 
               <Wide></Wide>
            </Body>
        )
    }
}

export default App;