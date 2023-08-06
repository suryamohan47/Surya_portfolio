import React from "react";
import "./Footerstyle.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-containers">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>No:02 First cross street,</p>
                        <p>Kothandaraman Nagar,</p>
                        <p>Nerkundram</p>
                        <p>chennai 600-107</p>

                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>
                    8680019223
                    </h4>
                     </div>

                     <div className="email">
                <h4><FaMailBulk size={20} style={{color:
                    "#fff",marginRight:"2rem"}}/>
                    suriyamohan047@outlook.com
                    </h4>
                  </div>
                  </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is me Surya.
                   Aspiring software engineer with hands-on experience in web development. I have the Strong ability to quickly learn and grasp new technologies.<br/>
                   Achieved a comprehensive understanding of front-end web development in a short period of time and Developed a "Food delight" web application project showcasing my skills in front-end web development.</p>
<div className="social">
<NavLink to="https://github.com/suryamohan47"><FaGithub size={30} style={{color:
                    "#fff",marginRight:"1rem"}}/></NavLink>
<NavLink to="https://www.linkedin.com/in/surya-mohan-004956269"><FaLinkedin size={30} style={{color:
                    "#fff",marginRight:"1rem"}}/></NavLink>


</div>



 </div>
 
</div>
</div>
  )
}

export default Footer;