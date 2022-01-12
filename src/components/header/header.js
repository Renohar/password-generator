import React from 'react';
import { Link } from 'react-scroll';

const header = () => {
    return (
        <div className="header">
         <div className="header__left">
             <h1>Develop<span>er</span></h1>
         </div>   
         <div className="header__right">
             <Link to="about" smooth="true" duration="500"><h4>About Me</h4></Link>
             <Link to="skills" smooth="true" duration="500"><h4>Skills</h4></Link>
             <Link to="projects" smooth="true" duration="500"><h4>Projects</h4></Link>
             <Link to="contacts" smooth="true" duration="500"><h4>Contact</h4></Link>
             <Link to="certifications" smooth="true" duration="500"><h4>Certifications</h4></Link>
             <Link><h4>Join</h4></Link>
         </div>
        </div>
    )
}

export default header;
