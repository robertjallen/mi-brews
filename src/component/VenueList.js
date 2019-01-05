import React, {Component} from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

export default class VenueList extends Component {
  render() {
    return (
      <ul className="venuList">
        {this.props.venues && 
          this.props.venues.map((venue, idx) => ( 
          <div>
            <ListItem 
              key={idx} 
              {...venue}
              {...this.props}
              handleListItemClick={this.props.handleListItemClick}
            />
          
            <Link
              className='button'
              key={venue.id}
              to={{
                pathname: '/brewery',
                state: {
                  venues: this.props.venues[idx]
                }
              }}
            >
              {venue.id}
          </Link>
          </div>
          ))}
      </ul>
    );
  }
}