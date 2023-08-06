import React from 'react';
import "./Educardstyles.css";
import{ FaCalendar, FaGraduationCap}  from "react-icons/fa";


const Educards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3><FaGraduationCap size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>Course-Education</h3>
           <h3 className="btc">Fullstack developer</h3>
           <h5>Besant technologies,anna nagar</h5>
           <h5><FaCalendar size={10} style={{color:
                    "#fff",marginRight:"2rem"}}/>2023</h5>
                    </div>

                    <div className="card">
          <h3><FaGraduationCap size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>Bachelor of engineering</h3>
           <h3 className="btc">B.E(Mechanical engineering)</h3>
           <h5>Meenakshi college of engineering,UG</h5>
           <h5><FaCalendar size={10} style={{color:
                    "#fff",marginRight:"2rem"}}/>2017-2021</h5>
                    </div>

                    <div className="card">
          <h3><FaGraduationCap size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>Higher-Education</h3>
           <h3 className="btc">SSLC & HSC</h3>
           <h5>LBEAAR.Matric.Hr.Sec.School</h5>
           <h5><FaCalendar size={10} style={{color:
                    "#fff",marginRight:"2rem"}}/>2014-2015 & 2016-2017</h5>
                    </div>



      
      
      
      
      
      
      
      
      </div>



    </div>
  )
}

export default Educards;