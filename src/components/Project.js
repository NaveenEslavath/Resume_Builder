import React from 'react'
import './Project.css'
import DeleteIcon from '@mui/icons-material/Delete';


const Project=(props)=>{


  const {projObj,projIndx,updatedVersion,projDelFunc}=props

  const {id,projectTitle,technologies,completion,projectDesc}=projObj

  const handleFunc=(field)=>(event)=>{
    updatedVersion(id,{[field]:event.target.value})
  }

  const delProj=()=>{
    projDelFunc(id)
  }

  return (
     <div className='pr-under'>
        <div className='cmn-marg'>
           <div className='delp-con'>
            <label className='labelp' htmlFor={`proj${projIndx+1}`}> {`Project Title ${projIndx+1}`}</label>
            <button className='delp' onClick={delProj}> <DeleteIcon style={{fontSize:'16px'}}/></button>
           </div>
            <input className='inpp' type='text' placeholder='Enter your project title' id={`proj${projIndx+1}`} value={projectTitle} onChange={handleFunc('projectTitle')}/>
        </div>
        <div className='cmn-marg'>
            <label className='labelp' htmlFor={`techn${projIndx+1}`}> Technologies</label>
            <br/> 
            <textarea className='techn' rows={5} cols={50}  placeholder="Technologies Used!!" id={`techn${projIndx+1}`} value={technologies} onChange={handleFunc('technologies')}> </textarea>
        </div>

        <div className='cmn-marg'>
          <label htmlFor={`mnth${projIndx+1}`} className="labelp"> Completed </label>
          <br/> 
          <input type="number"  placeholder="Completion" className="yearp" id={`start${projIndx}`}  step="1" value={completion} onChange={handleFunc('completion')}/>
        </div>

        <div>
        <label htmlFor={`pd${projIndx+1}`} className="labelp "> Project Description  </label>
        <br/> 
         <textarea className='techn' rows={5} cols={50}  placeholder="Project Explaination!!" id={`pd${projIndx+1}`} value={projectDesc} onChange={handleFunc('projectDesc')}> </textarea>
        </div>
            
     </div>
  )
}

export default Project