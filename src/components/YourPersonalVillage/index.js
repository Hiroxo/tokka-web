import React, { Component } from 'react';
import styles from "./styles.css";
import image1 from "../../images/parent-by-door.jpg";
import image2 from "../../images/two-people-dancing.png";
import image3 from "../../images/lady-with-phone.png";
import image4 from "../../images/phone-messages.png";
import image5 from "../../images/on-phone-with-coffee.png";

class YourPersonalVillage extends Component {
  render() {
    return (
      <div className="container">
        <div className="yourVillage">
            Your Personal Village
        </div>
        <div className="copy">
          Tokka is the community of parents that help each other out with last-minute babysitting support.
        </div>
        
        <div className="parentsHelping">
            Parents helping other parents
        </div>
        <img className="image" src={image1} />
        
        <div className="copy">
          Invite your parent friends. They get added to your trusted list.
        </div>
        <img className="image" src={image2} />
        
        <div className="copy">
          When you need babysitting help send them a request.
        </div>
        <img className="image" src={image3} />
        
        <div className="copy">
          Receive responses from available parents and accept one that works for everyone.
        </div>
        <img className="image" src={image4} />
        
        <div className="copy">
          Take care of your business with confidence, knowing that your child is in safe hands.
        </div>
        <img className="image" src={image5} />

        <div className="copy">
          You get help from a trusted source while they get rewarded for their work - it's a win-win!
        </div>
        <div className="beTheFirst">
            Be the first to try Tokka
        </div>
        
        <div className="copy">
        Coming in Winter 2019 to the limited number of users. Be the first to try Tokka. Join our waitlist.
        </div>
      </div>
    );
  }
}

export default YourPersonalVillage;