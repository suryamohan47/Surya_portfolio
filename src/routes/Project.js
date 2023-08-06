import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Educards from '../components/Educards';
import Work from '../components/Work';


const Project = () => {
  return (
    <div><Navbar/>
    <Heroimg2 heading="PROJECTS"
    text="And My Qualification" />
    <Work/>
    <Educards/>
    <Footer/>
    </div>
  )
}

export default Project;