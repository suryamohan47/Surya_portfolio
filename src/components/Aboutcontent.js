import React from 'react';
import "./Aboutcontentstyle.css";
import { Link } from 'react-router-dom';



const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react font-end Developer.Aspiring 
             Associate software engineer with hands-on 
             knowledge in web development</p>
             <Link to="/contact">
                <button className="btn">Contact</button>


             </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src="https://nightbaker.github.io/images/smoothScroll2.gif" className="img" alt="true"/>



                </div>
                <div className="img-stack bottoms">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--tgHHeoRA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1m9xui8wjmxu85fkckbk.gif" className="img" alt="true"/>



                </div>
                

            </div>

            
            
        </div>



    </div>
  )
}

export default Aboutcontent