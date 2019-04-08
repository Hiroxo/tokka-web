import React, { Component } from 'react';
import styles from "./styles.css";

import facebook from "../../images/021-facebook.png";
import instagram from "../../images/025-instagram.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
            Tokka
        </div>
        <div>
            <div className="icon">
                <a href="https://www.facebook.com/tokkaapp" rel="noopener noreferrer" target="_blank">
                  <img className="headerIcon" src={facebook} alt="facebook link"/>
                </a>
            </div> 
            <div className="icon">
                <a href="https://www.instagram.com/tokkaapp/" rel="noopener noreferrer" target="_blank"> 
                  <img className="headerIcon" src={instagram} alt="instagram link"/>
                </a>
            </div>
        </div>
        
      </div>
    );
  }
}

export default Header;



