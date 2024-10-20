import React from "react";
import './WorkDetails.css'
import DeleteIcon from '@mui/icons-material/Delete';


const WorkDetails=(props)=>{

  const {obj,updWorkExp,func4,index}=props
  const {id,title,desc,exp}=obj

  const handleWorkExpFunc=(field)=>(event)=>{
    updWorkExp(id,{[field]:event.target.value})
  }

  const delWorkExp=()=>{
  func4(id)
  }

   return(
    <div className="x1">

  <div className="last-butt">
    
    <div className="align">
    <div>
      <label htmlFor={`title${index+1}`} className="label2"> {`JOB TITLE ${index+1}`} </label>
      <br/>
      <input className='inp2' type="text" placeholder={`Enter your Job title ${index+1}`} id={`title${index+1}`} onChange={handleWorkExpFunc('title')} value={title}/>
    </div>

    <div className="exp">
      <label htmlFor={`exp${index+1}`} className="label2"> EXPERIENCE </label>
      <br/>
      <input className='inp2' type="number" placeholder='Enter your experience' id={`exp${index+1}`} onChange={handleWorkExpFunc('exp')} value={exp}/>
    </div>
    </div>

    <button onClick={delWorkExp} className="del-box1"> 
         <DeleteIcon style={{fontSize:'16px'}}/>
    </button>

</div>

   
<div className="align butt-align">
    <div>
    <label htmlFor={`description${index+1}`} className="label2"> {`DESCRIPTION ${index+1}`} </label>
    
    <br/>

    <textarea className="txtarea" rows={6} cols={60} placeholder='Enter your description' id={`description${index+1}`} value={desc} onChange={handleWorkExpFunc('desc')}>
    </textarea>

    
    </div>

    
      
    

  </div>

  </div>
   )
}

export default WorkDetails

/*
const titleFunc=(event)=>{
    func1(id,event.target.value)
  }

  const descFunc=(event)=>{
   func2(id,event.target.value)
  }

  const expFunc=(event)=>{
    func3(id,event.target.value)
  }
    */