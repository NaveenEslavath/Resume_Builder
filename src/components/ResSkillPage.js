import React from "react";
import './ResSkillPage.css'


const ResSkillPage=(props)=>{

    const {rskillObj}=props

    const {sname}=rskillObj

    return (
        <li className="skill-li">
         {sname}&nbsp;,
        </li>
    )

}

export default ResSkillPage