/* global google */
import React, { Component } from "react";
import { withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow 
} from "react-google-maps";


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    zoom={props.zoom}
    defaultCenter={{ lat: 30.397, lng: -97.644 }}
    center={props.center}
    >

    {props.markers &&
     props.markers.filter(marker => marker.isVisible)
      .map((marker, idx, arr) => {
        const venueInfo = props.venues.find(venue => venue.id === marker.id);
        return <Marker
          key={idx} 
          position={{ lat: marker.lat, lng: marker.lng}}
          onClick={() => props.handleMarkerClick(marker)}
          animation={arr.length === 1 || marker.isOpen
            ? google.maps.Animation.BOUNCE  
            : google.maps.Animation.DROP }
        >
          {marker.isOpen && 
          venueInfo.bestPhoto && (
            <InfoWindow>
              <React.Fragment>
                <img
                src={`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`}
                alt={venueInfo.name}/>
                <p>{venueInfo.name}</p>
              </React.Fragment>
            </InfoWindow>
          )}
        </Marker>
      })}
  </GoogleMap>
))
);

  


export default class Map extends Component {
  render(){
    return (
    < MyMapComponent
      {...this.props}
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCzmnNpxUWrJ23VyI57iji2JPRrYwKxx64"
      loadingElement={< div className='loading-element' />}
      containerElement={< div className='map-container' />}
      mapElement={< div  className='map-element' />}
    />
    );
  }
}  