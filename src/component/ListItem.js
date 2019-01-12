import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// function rating(){
//   const stars = [];
//   for(var i=0; i<{...this.props.rating}; i++){
//     stars.push(i);
//   }
//   console.log(stars);
// }
// rating();
// console.log(this.props.rating)
 const Star = () => (
      // console.log(stars);
  <div>
    <FontAwesomeIcon icon="star" className='star' />
  </div>
)



// Food = return Array.from({length: this.props.rating}, ({this.props.rating}, index) => 
//   <FontAwesomeIcon icon="star" key={index}/>
// );


export default class ListItem extends Component {

  render() {
   
    let stars = []
    // console.log(this.props.rating);
    for(var i=0; i<this.props.rating/2; i++){
      stars.push(<Star/>);
    }

    const myObj = { ...this.props.bestPhoto };
    let photo = myObj.prefix + '100x100' + myObj.suffix;
    return (
      <div className='details'>
      <li 
        aria-labelledby={this.props.name}
        role={'contentinfo'}
        tabIndex={0}
        >

        <img src={photo} alt={this.props.name}/>
        <div className='details-details'>
          <p className="details-name">{this.props.name}</p>
          <p className="details-address">{this.props.location.formattedAddress[0]}</p>
          <div className='rating'>  
            {stars.map((numStar, idx) => (
              <Star key={idx}/>
            ))
            }
          </div>          
        </div>
      </li>
      </div>//enclosing tag
    );
  }
}


