import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareApi from './api';
import SideBar from './component/SideBar';
import Hero from './component/Hero';

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

  setCenter = (marker) => {
    this.setState({center: Object.assign(this.state.center, marker.lat, marker.lng)});
  }

  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers,marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    SquareApi.getVenueDetails(marker.id) 
    .then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues, newVenue)});
    });
    this.setCenter(marker);
  };

  handleListItemClick = (venue) => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
    console.log(venue);
  };
  //SquareApi.//marker.id
  


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
        console.log("ERROR! " + error);
    });
  }
  

  componentDidMount(){
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
