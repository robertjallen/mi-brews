import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li 
        className="listItem"
        onClick={() => this.props.handleListItemClick(this.props)}
        >
        <img src={this.props.categories[0].icon.prefix+'32'+this.props.categories[0].icon.suffix} alt={'venue'}/>
        <div className='details'>
          <p className="details-name">{this.props.name}</p>
          <p>{this.props.location.formattedAddress[1]}</p>
        </div>
        
      </li>
    );
  }
}