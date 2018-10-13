import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li 
        className="listItem"
        aria-labelledby={this.props.name}
        tabIndex={0}
        onClick={() => this.props.handleListItemClick(this.props)}
        >
        <img src={this.props.categories[0].icon.prefix+'32'+this.props.categories[0].icon.suffix} alt={'venue'}/>
        <div className='details'>
          <p className="details-name">{this.props.name}</p>
          <p className="details-address">{this.props.location.formattedAddress[0]}</p>
          <p className="details-address">{this.props.location.formattedAddress[1]}</p>
        </div>
        
      </li>
    );
  }
}