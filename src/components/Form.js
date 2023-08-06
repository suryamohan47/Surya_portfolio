import React from 'react';
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Name"></input>
            <label>Email</label>
            <input type="email" placeholder="Email"></input>
            <label>Subject</label>
            <input type="text" placeholder="Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here"/>
            <button className="btn">Submit</button>




        </form>



    </div>
  )
}

export default Form;