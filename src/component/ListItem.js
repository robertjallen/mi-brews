import React, {Component} from 'react';

// import Brewery from './Brewery';


export default class ListItem extends Component {

  render() {
    
    const myObj = { ...this.props.bestPhoto };
    let photo = myObj.prefix + '100x100' + myObj.suffix;
    return (
      <div className='details'>
      <li 
        aria-labelledby={this.props.name}
        role={'contentinfo'}
        tabIndex={0}
        onClick={() => this.props.handleListItemClick(this.props)}
        >

        <img src={photo} alt={this.props.name}/>
        <div className='details-details'>
          <p className="details-name">{this.props.name}</p>
          <p className="details-address">{this.props.location.formattedAddress[0]}</p>
        </div>
      </li>
      </div>//enclosing tag
    );
  }
}


