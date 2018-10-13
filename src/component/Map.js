/* global google */
import React, { Component } from "react";
import { withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const REACT_APP_MAP_KEY = process.env.REACT_APP_MAP_KEY;
const gMapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${REACT_APP_MAP_KEY}`;


const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    zoom={props.zoom}
    defaultCenter={{ lat: 30.397, lng: -97.644 }}
    center={props.center}
    tabIndex={-1}
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
            <InfoBox>
              <React.Fragment>
                <div className="info-container">
                  <img className="info-image"
                    src={`${venueInfo.bestPhoto.prefix}100x100${venueInfo.bestPhoto.suffix}`}
                    alt={venueInfo.name} />
                  <div className='info-div'>
                    <p className="info-name">{venueInfo.name}</p>
                    <a aria-labelledby={'more info'} className="info-url" href={venueInfo.shortUrl}>More Info</a>
                  </div>
                </div>
              </React.Fragment>
            </InfoBox>
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
      googleMapURL={gMapUrl}
      loadingElement={< div className='loading-element' />}
      containerElement={< div className='map-container' />}
      mapElement={< div  className='map-element' />}
    />
    );
  }
}  