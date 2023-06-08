import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" alt="Profile Pic"></img>
          </div>
        </div> 
        <div className="split right">
          <div className="centered">
            <div className="name_title">Johany Flores</div>
            <div className="brief_description">
              I am a rising Junior attending the University of Texas at Arlington. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}