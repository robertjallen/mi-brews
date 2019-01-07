import React, {Component} from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

export default class VenueList extends Component {
  render() {
    return (
      <ul className="venuList">
        {this.props.venues && 
          this.props.venues.map((venue, idx) => ( 
          <div className="list-item">
            <ListItem 
              key={venue.id} 
              {...venue}
              {...this.props}
              handleListItemClick={this.props.handleListItemClick}
            />
          
            <Link
              className='button'
              key={idx}
              to={{
                pathname: '/brewery',
                state: {
                  venues: this.props.venues[idx],
                  markers: this.props.markers
                }
              }}
            >
              <button>More Details</button>
          </Link>
          </div>
          ))}
      </ul>
    );
  }
}