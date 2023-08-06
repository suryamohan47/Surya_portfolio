import React from 'react';
import "./Heroimagestyle.css";
import PhotoImg from "../Assets/photo_2023.jpg";
import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="photo-img" src={PhotoImg} alt="PhotoImg"/>
         </div>
         <div className='content'>
          <p>HI, I'M Surya </p>
          <h1>React Developer</h1>
          <div>
            
            <Link to="https://drive.google.com/file/d/1Kcq-q9NbvDMTkOmfWJr4QWhDQulA9Sx0/view?usp=drivesdk" className="btn">Resume</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>

          </div>
          </div>


    </div>
  );
};

export default Heroimage;