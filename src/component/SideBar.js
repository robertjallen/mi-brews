import React, {Component} from "react";
import VenueList from "./VenueList";

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      venues: []
    };
  }


  handleFilterVenues = () => {
      if(this.state.query.trim() !== '') {
      const venues = this.props.venues.filter(venue =>  
      venue.name.toLowerCase().includes(this.state.query.toLowerCase()) +    
      venue.location.formattedAddress[1].toLowerCase().includes(this.state.query.toLowerCase()));
      console.log(venues);
      return venues;
    }
     return this.props.venues;
  };

  handleChange = e => {
    this.setState({ query: e.target.value });

    const markers = this.props.venues.map(venue => { 
      const nameMatched = venue.name
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
      const locationMatched = venue.location.formattedAddress[1]
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if(nameMatched || locationMatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    // this.props.updateSuperState({markers: Object.assign(this.props.markers, markers)});
    // this.props.updateSuperState({markers: markers});
    this.props.updateSuperState({ markers });
  };

  render() {
    return(
    <div className='sidebar'>
      <input 
        type={'search'}
        id={'search'} 
        placeholder={'Search'}
        onChange={this.handleChange}
        aria-labelledby={'search'}
        tabIndex={0}
        />
      <VenueList 
        {...this.props}
        venues={this.handleFilterVenues()}
        handleListItemClick={this.props.handleListItemClick}
      />
    </div>
    );
  }
}