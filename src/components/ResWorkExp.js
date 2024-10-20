import React from "react";
import './ResWorkExp.css'



const ResWorkExp=(props)=>{

    const {workObj}=props

    const {id,title,desc,exp}=workObj

    return (
        <li>
            <p className="pcpy"> {title}</p>
            <p className="pcpy2"> Year(s) of Experience:&nbsp;{exp}</p>
            <p className="pcpy1">{desc}</p>
        </li>
    )

}

export default ResWorkExp