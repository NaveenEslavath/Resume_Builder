import React from "react";
import './ProjectCard.css'

const ProjectCard=(props)=>{

    const {proj}=props
    const {id,projectTitle,technologies,completion,projectDesc}=proj

   return (
      <li className="prli">
        <div className="pr-align">
        <p className="prTle"> {projectTitle} &nbsp;|&nbsp; {technologies} </p>
        <span className="cmplt"> {completion} </span>
        </div> 
        <p className="prpara"> {projectDesc} </p>
      </li>
   )
}

export default ProjectCard