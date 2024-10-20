import React,{useState,useEffect} from "react";
import { json, useNavigate } from "react-router-dom";
import './Form.css'
import WorkDetails from "./WorkDetails";
import {v4 as uuidv4} from 'uuid'
import Education from "./Education";
import Skill from "./Skill";
import Project from "./Project";


const Form=()=>{

   const data=localStorage.getItem('resumeData')

   const t=data?JSON.parse(data):{}

   const navigate=useNavigate()

    const [first,setFirst]=useState(t.firstName||'')
    const [last,setLast]=useState(t.lastName||'')
    const [mail,setMail]=useState(t.email || '')
    const [phone,setPhone]=useState(t.contact||'')
    const [psum,setPfsum]=useState(t.objective||'')
    const [skl,setSkl]=useState('')
    const [skills,setSkills]=useState(t.skillSet||[])

    const [err,setErr]=useState(false)

   
    const [edu,setEdu]=useState(t.education||[])

    const [projects,setProjects]=useState(t.project||[])

    const [workExp,setWorkExp]=useState(t.Expr||[])


    const homeFuncButt=()=>{
      localStorage.removeItem('resumeData')
      navigate('/')
    }


   const pfFunc=(event)=>{
      setPfsum(event.target.value)
   }


    const projectsFunc=(event)=>{
      event.preventDefault()
      const newProject={
         id:uuidv4(),
         projectTitle:'',
         technologies:'',
         completion:'',
         projectDesc:''
      }

      setProjects(prevProj=>[...prevProj,newProject])

    }

    const updatedVersion=(id,updObj)=>{
      const modProjects=projects.map((i)=>{
         if (i.id===id){
            return {...i,...updObj}
         }
         else{
            return i 
         }
      })
      setProjects(modProjects)
    }

    const projDelFunc=(id)=>{
      const filProjects=projects.filter((i)=>i.id!==id)
      setProjects(filProjects)
    }




    const educFunc=(event)=>{
        event.preventDefault()
        const eduObj={id:uuidv4(),school:'',start:'',end:'',cgpa:'',degree:''}
        setEdu(prevEdu=>[...prevEdu,eduObj])
    }

    const updEduFunc=(id,educObj)=>{
        const modEduArr=edu.map((i)=>{
         if (i.id===id){
            return {...i,...educObj}
         }
         else{
            return i 
         }
        })
        setEdu(modEduArr)
    }
    
     const deleteFunc=(id)=>{
         const filArr=edu.filter((i)=>i.id!==id)
         setEdu(filArr)
     }


     const addFunc=(event)=>{
      event.preventDefault()
      const newObj={id:uuidv4(),title:'',desc:'',exp:''}
      setWorkExp(prevLis=>[...prevLis,newObj])
    }
  
    const updWorkExp=(id,workExpObj)=>{
      const modWorkExpArr=workExp.map((i)=>{
         if (i.id===id){
            return {...i,...workExpObj}
         }
         else{
            return i
         }
      })
      setWorkExp(modWorkExpArr)
    }
     
     const delWorkExpFunc=(id)=>{
         const filWork=workExp.filter((i)=>i.id!==id)
         setWorkExp(filWork)
     }
    
     const skillFunc=(event)=>{
       setSkl(event.target.value)
     }

     const addSkillsFunc=(event)=>{
          event.preventDefault()
          const newSkill={id:uuidv4(),sname:skl}
         setSkills(prevSkill=>[...prevSkill,newSkill])
         setSkl('')
     }

     const firstNameFunc=(event)=>{
        setFirst(event.target.value)
     }

     const lastNameFunc=(event)=>{
        setLast(event.target.value)
     }

     const mailFunc=(event)=>{
        setMail(event.target.value)
     }

     const phoneFunc=(event)=>{
        setPhone(event.target.value)
     }

     const delSkillFunc=(id)=>{
        const filSkill=skills.filter((i)=>i.id!==id)
        setSkills(filSkill)
     }

     const submitFunc=(event)=>{
        event.preventDefault()
        const details={
            firstName:first,
            lastName:last,
            contact:phone,
            email:mail,
            objective:psum,
            education:edu,
            skillSet:skills,
            project:projects,
            Expr:workExp
        }

        if (first.trim()!=='' && last.trim()!=='' && mail.trim()!=='' 
        && phone.trim()!=='' && psum.trim()!=='' && skills.length!=0 && edu.length!=0 && projects.length!=0){
          
         setErr(false)
         localStorage.setItem('resumeData', JSON.stringify(details));
         navigate('/resume',{state:details})

              

        }
        else{
         setErr(true)
        }

     }


     

     
     
  


   return(
     
      <form onSubmit={submitFunc} className="form">
           
        <h4 className="main-heading"> Build Your Own Resume </h4>

        <div className="cmn-con">
        <div >
            <label htmlFor="firstname" className="label">First Name*</label>
            <br/>
            <input type="text" placeholder="Enter your first name" id="firstname" className="inp" value={first} onChange={firstNameFunc}/>
        </div>

        <div className="ex">
            <label htmlFor="lastname" className="label">Last Name*</label>
            <br/>
            <input type="text" placeholder="Enter your last name" id="lastname" className="inp" value={last} onChange={lastNameFunc}/>
        </div>
        </div>
        
        <div className="cmn-con">

        <div>
            <label htmlFor="email" className="label">Email*</label>
            <br/>
            <input type="text" placeholder="Enter your mail id" id="email" className="inp" value={mail} onChange={mailFunc}/>
        </div>

        <div className="ex">
            <label htmlFor="phone" className="label">Phone Number*</label>
            <br/>
            <input type="text" placeholder="Enter your mobile number" id="phone" className="inp" value={phone} onChange={phoneFunc}/>
        </div>

        </div>

         <div>
            <label htmlFor="pfsumm" className="label">Professional Summary*</label>
              <br/>
            <textarea className='pfsum' value={psum} rows={3} cols={70} placeholder="Enter your professional summary" onChange={pfFunc}></textarea>
         </div>
      
         <div>
            <div className="main">
            <h4 className="x"> Educational Details*</h4> 
            <button className="add" onClick={educFunc}> Add </button>
           </div>
             
           {edu.length!=0?
            edu.map((i,index)=><Education key={i.id} idx={index+1} eduOb={i} updEduFunc={updEduFunc} fun6={deleteFunc}/>):''
           }
          

         </div>

         <div>
            <h4 className="x"> Skills* </h4>
            
            <div>
                <input type="text" placeholder="Enter your skills" className="inpSkill" onChange={skillFunc} value={skl}/>
                <button className="add1" onClick={addSkillsFunc}> Add </button>
            </div>
          <ul className="sul">
          {
            skills.length!=0?
             skills.map((i)=><Skill key={i.id} skillObj={i} delSkillFunc={delSkillFunc}/>)
            :''
          }
         </ul> 
         </div>


         <div>
            <div className="main mm">
            <h4 className="x"> Projects*</h4> 
            <button className="add" onClick={projectsFunc}> Add </button>
           </div>
             
         {
            projects.length!=0?
            projects.map((i,index)=><Project key={i.id} projObj={i} projIndx={index} updatedVersion={updatedVersion} projDelFunc={projDelFunc}/>)
            :''
         }
          

         </div>

         <div>
           <div className="main">
              <h4 className="x"> Work Experience</h4> 
              <button className="add" onClick={addFunc}> Add </button>
           </div>
           {workExp.length!=0?
             workExp.map((i,index)=><WorkDetails key={i.id} obj={i} index={index} updWorkExp={updWorkExp} func4={delWorkExpFunc}/>):''
           }

         </div>
        
        <div className="sub-back-con">
        <button type="submit" className="submit"> Submit </button>
        <button  className="submit" onClick={homeFuncButt}> &lt; back </button>
        </div>

         {err? <p className="errPara"> * fields are required </p>:''}
      </form>
   )
}

export default Form


        
         
    
    
     
