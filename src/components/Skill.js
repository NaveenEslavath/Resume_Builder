import React from "react";
import './Skill.css'
import CloseIcon from '@mui/icons-material/Close';


const Skill=(props)=>{

 const {skillObj,delSkillFunc}=props
 const {id,sname}=skillObj

 const delSkill=()=>{
    delSkillFunc(id)
 }

   return(
     <li className="sli">
        <span>{sname}</span>
        <button className="cross-butt" onClick={delSkill}>
        <CloseIcon style={{fontSize:'14px'}}/>
        </button>
     </li>
   )
}

export default Skill 