import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareApi from './api';
import SideBar from './component/SideBar';
import Hero from './component/Hero';

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
    // console.log(marker);
  }

      


  handleMarkerClick = (marker) => {
    this.closeAllMarkers();
    this.setCenter(marker);
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers,marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id);

   


    // getVenueDetails(marker.id)
    SquareApi.getVenueDetails(marker.id) 
    .then(res => {
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues, newVenue)});
      // console.log(newVenue);
    });
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
        client_id: "L0ZK3VLIPIYJBRFHR2D421ZUPVBOEBUPMR5PQFKWDMT1UQJA",
        client_secret: "HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG",
        v: version,
        near: 'Brighton, MI',
        radius: 500000,
        query: 'brewery',
        limit: 10
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
    // SquareApi.search({
    //   near: 'Brighton, MI',
    //   radius: 500000,
    //   query: 'brewery',
    //   limit: 5
    // }).then(results => {
    //     const { venues } = results.response;
    //     const { center } = results.response.geocode.feature.geometry;
    //     const markers = venues.map(venue => {
    //       return {
    //         lat: venue.location.lat,
    //         lng: venue.location.lng,
    //         isOpen: false,
    //         isVisible: true,
    //         id: venue.id
    //       };
    //     });
    //     this.setState({ venues, center, markers });
    //   // console.log(results.response);
    // });
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
