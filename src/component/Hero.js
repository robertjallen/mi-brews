import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="screen">
          {/* <h1>MI Brews</h1> */}
          <img alt='mi brews logo' className='logo' src={require('../images/logo_small.png')}/>
          {/* <p>Metro Detroit Brewers</p> */}
        </div>  
      </div>
      
    );
  }
}