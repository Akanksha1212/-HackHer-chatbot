
import React, { Component } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./styles.scss";
//import Header from './Componants/Header'



class App extends Component {
  render() {
    return ( 
      <div>
        <MyApp  />
        <Frame3 {...frame3Data} />
        
       </div>
  );
 }
}


export default App;


function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}



function Frame3(props) {
  const {
    rectangle13,
    rectangle11,
    rectangle23,
    about,
    about2,
    text1,
    text2,
    hireMe,
    skills,
    schedule,
    place,
    rectangle2,
    rectangle20,
    rectangle19,
    anjaliSridharan,
    ellipse1,
    ellipse2,
    ellipse3,
    ellipse4,
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
    rectangle5,
    ellipse5,
    ellipse6,
    vector2,
    vector3,
    schedule2,
    text3,
    place2,
    place3,
    place4,
    message,
    email,
  } = props;

  return (
    <div className="frame-3">
      <div className="overlap-group">
        <div className="rectangle-25"></div>
        <img className="rectangle-13" src={rectangle13} />
        <div className="rectangle-1 white-border-6px"></div>
        <img className="rectangle-11" src={rectangle11} />
        <div className="rectangle-24"></div>
        <img className="rectangle-23" src={rectangle23} />
        <div className="about roboto-medium-black-30px">{about}</div>
        <div className="about-1 roboto-medium-black-64px">{about2}</div>
        <div className="text-1 roboto-normal-black-36px">{text1}</div>
        <div className="text-2 roboto-normal-black-36px">{text2}</div>
        <div className="rectangle-12 border-class-1"></div>
        <div className="hire-me valign-text-middle roboto-normal-black-36px">{hireMe}</div>
        <div className="skills roboto-medium-black-30px">{skills}</div>
        <div className="schedule roboto-medium-black-30px">{schedule}</div>
        <div className="place roboto-medium-black-30px">{place}</div>
        <img className="rectangle-2" src={rectangle2} />
        <img className="rectangle-20" src={rectangle20} />
        <img className="rectangle-19" src={rectangle19} />
        <h1 className="anjali-sridharan robotoslab-normal-black-144px">{anjaliSridharan}</h1>
        <img className="ellipse-1" src={ellipse1} />
        <img className="ellipse-2" src={ellipse2} />
        <img className="ellipse-3" src={ellipse3} />
        <img className="ellipse-4" src={ellipse4} />
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
        <img className="rectangle-5" src={rectangle5} />
        <div className="rectangle-26"></div>
        <div className="rectangle-29"></div>
        <div className="rectangle-30"></div>
        <img className="ellipse-5" src={ellipse5} />
        <img className="ellipse-6" src={ellipse6} />
        <img className="vector-2" src={vector2} />
        <img className="vector-3" src={vector3} />
      </div>
      <div className="overlap-group2">
        <div className="schedule-1 roboto-medium-black-64px">{schedule2}</div>
        <div className="text-3 roboto-normal-black-36px">{text3}</div>
        <div className="rectangle-14"></div>
        <div className="rectangle-27"></div>
      </div>
      <div className="overlap-group1">
        <div className="place-1 roboto-medium-black-64px">{place2}</div>
        <div className="rectangle-15 border-class-1"></div>
        <div className="place-2 valign-text-middle roboto-normal-black-36px">{place3}</div>
        <div className="place-3 roboto-normal-black-36px">{place4}</div>
        <div className="message roboto-normal-black-36px">{message}</div>
        <div className="email roboto-normal-black-36px">{email}</div>
        <div className="rectangle-18"></div>
        <div className="rectangle-17"></div>
        <div className="rectangle-22"></div>
        <div className="rectangle-28"></div>
      </div>
      <div className="rectangle-22-1"></div>
    </div>
  );
}
const frame3Data = {
    rectangle13: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-13@1x.png",
    rectangle11: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-11@1x.png",
    rectangle23: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-23@1x.png",
    about: "About",
    about2: "About",
    text1: "I am an engineer from Austin, TX. I can help you design prototypes or look after your children. I am willing to travel anywhere in the Austin area.",
    text2: "Engineer. Caregiver.",
    hireMe: "Hire me",
    skills: "Skills",
    schedule: "Schedule",
    place: "Contact",
    rectangle2: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-2@1x.png",
    rectangle20: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-2@1x.png",
    rectangle19: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-2@1x.png",
    anjaliSridharan: "Anjali Sridharan",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-1@2x.png",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-2@2x.png",
    ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-2@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-2@2x.png",
    skills2: "Skills",
    childcare: "Childcare",
    tutoring: "Tutoring",
    address: "2 years experience",
    address2: "5 years experience",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-1@1x.png",
    line2: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-1@1x.png",
    line3: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-3@2x.png",
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-3@2x.png",
    driving: "Driving",
    address3: "7 years experience",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-1@1x.png",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/line-3@2x.png",
    text4: "Looking after children ages 3+",
    text5: "Reading, writing, math.",
    text6: "Can pickup and drop off children.",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/rectangle-5@1x.png",
    ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-5@2x.png",
    ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/ellipse-5@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/vector-2@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60230c8043e298f0cfde5635/releases/60240e0a6ec092f5b898a214/img/vector-3@2x.png",
    schedule2: "Schedule",
    text3: "I am available Monday through Friday from 9 am to 5 pm.",
    place2: "Contact",
    place3: "Send",
    place4: "Name",
    message: "Message",
    email: "Email",
};

