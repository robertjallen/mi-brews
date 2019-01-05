import React, {Component} from 'react';

// import Brewery from './Brewery';


export default class ListItem extends Component {

  render() {
    
    const myObj = { ...this.props.bestPhoto };
    let photo = myObj.prefix + '100x100' + myObj.suffix;
    return (
      <div>
      <li 
        className="listItem"
        aria-labelledby={this.props.name}
        role={'contentinfo'}
        tabIndex={0}
        onClick={() => this.props.handleListItemClick(this.props)}
        >

        <img src={photo} alt={this.props.name}/>
        <div className='details'>
          <p className="details-name">{this.props.name}</p>
          <p>{this.props.id}</p>
          {/* <p className="details-address">{this.props.location.formattedAddress[0]}</p>
          <p className="details-address">{this.props.location.formattedAddress[1]}</p> */}
          {/* <p className="details-name">{this.props.bestPhoto.prefix}</p> */}
          {/* <a aria-labelledby={'more info'}
            className="info-url"
            href={this.props.url}
            target="_blank"
            rel="noopener noreferrer"
        >View Details</a>*/}


           
         
          
        </div>
      </li>
      </div>//enclosing tag
    );
  }
}


