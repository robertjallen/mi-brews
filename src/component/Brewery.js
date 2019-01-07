import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';

class Brewery extends Component {

  render() {
    const venue = this.props.location.state.venues;
    console.log(venue)
    let hours = 'closed';
    if(venue.hours.isOpen){
      hours = 'open';
    }

    return (

      <div>
        <div className='nav'>
         <Link
              to='/'
            >
              Home 
          </Link> / {venue.name}
        </div>  

        <div className='hero'>
          <div className='hero-text'>
            <h2>{venue.name}</h2>
          </div>
          <img src={venue.bestPhoto.prefix + '720x720' + venue.bestPhoto.suffix} />        
        </div>
        <div className='open'>
              {hours}
        </div>  
        <div className='address'>
         {venue.location.formattedAddress[0]} , {venue.location.formattedAddress[1]}
        </div>

        <div className='description'>
        {venue.description}
        </div>
      </div>

    );
  }
}
export default Brewery;