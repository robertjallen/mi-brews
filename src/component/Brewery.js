import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Brewery extends Component {

  render() {
    const venue = this.props.location.state.venues;
    console.log(venue)
    return (

      <div>
        <h2>{venue.name}</h2>
        <img src={venue.bestPhoto.prefix + '72x72' + venue.bestPhoto.suffix} />

            <Link
              to='/'
            >
              Main Page
          </Link>
      </div>
    );
  }
}
export default Brewery;