// Latest Commit
import React, { Component } from 'react';

import './App.css'
import Header from './components/Header'
import Title from './components/Title';
import Footer from './components/Footer'
import About from './components/About'
import Schedule from './components/Schedule'
import Gallery from './components/Gallery'



class App extends Component {
  render() {
    return (
      <>
      <Header/> 
      <Title/>
      <About/>
      <Gallery/>
      <Frame3 {...frame3Data} />
      <Schedule/>
      <Footer/>
      
      
      </>
    );
  }
}

export default App;

function Frame3(props) {
  const {
   
    skills2,
    childcare,
    tutoring,
    address,
    address2,
    line1,
    line2,
    line3,
    line4,
    driving,
    address3,
    line5,
    line6,
    text4,
    text5,
    text6,
    text3,
  } = props;

  return (
    <div className="frame-3">
      <div id="frame-3">
        <div className="overlap-group">
        <div className="skills-1 roboto-medium-black-64px">{skills2}</div>
        <div className="childcare roboto-normal-black-36px">{childcare}</div>
        <div className="tutoring roboto-normal-black-36px">{tutoring}</div>
        <div className="address roboto-normal-black-36px">{address}</div>
        <div className="address-1 roboto-normal-black-36px">{address2}</div>
        <img className="line-1" src={line1} />
        <img className="line-2" src={line2} />
        <img className="line-3" src={line3} />
        <img className="line-4" src={line4} />
        <div className="driving roboto-normal-black-36px">{driving}</div>
        <div className="address-2 roboto-normal-black-36px">{address3}</div>
        <img className="line-5" src={line5} />
        <img className="line-6" src={line6} />
        <div className="text-4 roboto-normal-black-36px">{text4}</div>
        <div className="text-5 roboto-normal-black-36px">{text5}</div>
        <div className="text-6 roboto-normal-black-36px">{text6}</div>
        </div>
          <div className="overlap-group2">
        
        <div className="text-3 roboto-normal-black-36px">{text3}</div>
        
           </div>
      </div>
     
    </div>
  );
}
const frame3Data = {
    
    about: "About",
    about2: "About",
   
    text2: "Engineer. Caregiver.",
    hireMe: "Hire me",
    skills: "Skills",
    schedule: "Schedule",
    place: "Contact",
    anjaliSridharan: "Anjali Sridharan",
    skills2: "Skills",
    
    schedule2: "Schedule",
    text3: "Caregiver.",
    place2: "Contact",
    place3: "Send",
    place4: "Name",
    message: "Message",
    email: "Email",
};


/*Database variables*/

