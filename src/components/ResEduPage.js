import React from "react";
import './ResEduPage.css'


const ResEduPage=(props)=>{


  const {educat}=props

  const {id,school,start,end,cgpa,degree}=educat

   return(
    <li className="resum-li">
      <div className="sch-date">
        <p className="p"> {school} </p>
        <p className="p"> {start}&nbsp;&nbsp;-&nbsp;&nbsp;{end}</p>
      </div> 
      <p className="degree"> {degree}</p>
      <p className="p"> CGPA &nbsp;:&nbsp; {cgpa}/10</p>
    </li>
   )
}

export default ResEduPage