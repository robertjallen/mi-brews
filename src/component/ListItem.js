import React, {Component} from 'react';

export default class ListItem extends Component {

  

  render() {
    //logging this works  
    console.log(this.props.bestPhoto);
    // logging this produces cannot read property 'prefix' of undefined
    // console.log(this.props.bestPhoto.prefix);
    return (
      <li 
        className="listItem"
        aria-labelledby={this.props.name}
        role={'contentinfo'}
        tabIndex={0}
        onClick={() => this.props.handleListItemClick(this.props)}
        >
        <p>{this.props.contact.formattedPhone}</p>
        {/* <p>{this.props.bestPhoto.prefix + '80x80' + this.props.bestPhoto.suffix}</p> */}
        {/* <p>{this.props.bestPhoto.prefix}</p> */}
        {/* <img className="info-image"
          src={`${this.props.bestPhoto.prefix}100x100${this.props.bestPhoto.suffix}`}
          alt={'venue'} /> */}
        {/* <img src={this.props.categories[0].icon.prefix+'32'+this.props.categories[0].icon.suffix} alt={'venue'}/> */}
        <div className='details'>
          <p className="details-name">{this.props.name}</p>
          <p className="details-address">{this.props.location.formattedAddress[0]}</p>
          <p className="details-address">{this.props.location.formattedAddress[1]}</p>
          {/* <p className="details-name">{this.props.bestPhoto.prefix}</p> */}
        </div>
        
      </li>
    );
  }
}