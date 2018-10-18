import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareApi from './api';
import SideBar from './component/SideBar';
import Hero from './component/Hero';


//fousquare ID and Secret 
//the key values should be stored in a .env file in the root directory
const REACT_APP_ID = process.env.REACT_APP_ID;
const REACT_APP_SECRET = process.env.REACT_APP_SECRET;

class App extends Component {
  constructor(){
    super();
    this.state ={
      venues: [],
      markers: [],
      center: [],
      zoom: 7,
      updateSuperState: obj => {
        this.setState(obj);
      }
    };
  }

  closeAllMarkers = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({markers: Object.assign(this.state.markers, markers) });
  };

  // // set new center
  // setCenter = (marker) => {
  //   this.setState({center: Object.assign(this.state.center, marker.lat, marker.lng)});
  // }

//marker click
  handleMarkerClick = (marker) => {
    //close any markers open
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers,marker)})
    // venue is venue that venue.id === marker.id
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    // use squareApi to get venue details using marker.id as the id for the venue.
    SquareApi.getVenueDetails(marker.id) 
    .then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues, newVenue)});
    });
    // // set new center value for map
    // this.setCenter(marker);
  };
  
//listIemClick calls handleMarkerClick 
  handleListItemClick = (venue) => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    console.log(venue);
  };

  //search for a limit 5 brewery venues near Brighton, MI 
  searchVenues = (version) => {
    const endPoint = "https://api.foursquare.com/v2/venues/search?"
    const parameters = {
        client_id: REACT_APP_ID,
        client_secret: REACT_APP_SECRET,
        v: version,
        near: 'Brighton, MI',
        radius: 500000,
        query: 'brewery',
        limit: 5
  }

  fetch(
    endPoint + new URLSearchParams(parameters))
    .then((res) => {
        if (!res.ok) {
              throw Error(res.statusText);
        }
        return res.json();
    })
    .then(res => {
      console.log(res.response.venues);
      const { venues } = res.response;
      const { center } = res.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, center, markers });
    }).catch(error => {
        window.alert("ERROR! " + error);
    });
  }
  
   
  
  componentDidMount(){
    // google map api load error
    window.gm_authFailure = () => {
      window.alert('google maps error');
    };
    this.searchVenues(20180323);
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <div className="main">
          <SideBar
            {...this.state}
            handleListItemClick={this.handleListItemClick}
          />

          <Map
            {...this.state}
            handleMarkerClick={this.handleMarkerClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
