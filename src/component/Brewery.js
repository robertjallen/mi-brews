import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Brewery extends Component {

  render() {
    const venue = this.props.location.state.venues;

  function OpenClosed () {
    let hours = 'open'
    if(venue.hours.isOpen === true){
      return(
        <div className='open'>
              {hours}
        </div>
      )
    }else{
      hours = 'closed'
      return(
        <div className='closed'>
              {hours}
        </div>
      )
    }
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
          <img alt={venue.name} src={venue.bestPhoto.prefix + '720x720' + venue.bestPhoto.suffix} />        
        </div>
        {/* <div className='open'>
              {hours}
        </div>   */}
        <OpenClosed/>
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