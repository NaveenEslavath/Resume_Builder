import React,{useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import ResEduPage from "./ResEduPage";
import ResSkillPage from "./ResSkillPage";
import ResWorkExp from "./ResWorkExp";
import './Resume.css'
import ProjectCard from "./ProjectCard";
import html2pdf from "html2pdf.js"; 
import DownloadIcon from '@mui/icons-material/Download'; 



const Resume=()=>{

  const navigate3=useNavigate()

  const location=useLocation()

  const { firstName,lastName,contact, email,objective, education,skillSet,project, Expr}=location.state

  


  const handleDownload = () => {
    const resumeContent = document.getElementById("resume-content"); 
    const options = {
      filename: `${firstName}_${lastName}_Resume.pdf`,  
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },  
    };
    html2pdf().from(resumeContent).set(options).save();  
  };

  const backFunc=()=>{
    navigate3('/form')
  }

  

   return(
    <div>
      <div className="align-download">
        <button  className="back" onClick={backFunc}> &lt; Back  </button> 
        <button onClick={handleDownload} className="download2"> <DownloadIcon/> </button> 
       <button onClick={handleDownload} className="download1"> Download</button> 
       </div>
      <div className="main-con" id="resume-content">
           <h4 className="head4"> {lastName}&nbsp;{firstName} </h4>
           <div className="all">
            <span className="mbl">{contact}</span>
            <span>&nbsp;|</span>
            <a href="#" className="anc"> <span>{email}</span></a>
            <br/>
            <span className="mbl ext"> Hyderabad, Telangana, 500082 </span>
           </div>

           <div>
            <h5 >CAREER OBJECTIVE </h5>
            <p className="career">
              {objective}
            </p>
           </div>
              
           <div>
            <h5 className="head55">EDUCATION</h5>

            <hr className="hr"/>


            <ul className="res-ul">
              {
                education.map((i)=><ResEduPage key={i.id} educat={i}/>)
              }
            </ul>
            
           </div>


           <div>
              <h5 className="head55"> TECHNICAL SKILLS </h5>
              <hr className="hr"/>
            <ul className="res-ul extension">
                {
                    skillSet.map((i)=><ResSkillPage key={i.id} rskillObj={i}/>)
                }
            </ul>
           </div>


           <div>
              <h5 className="head55"> PROJECTS </h5>
              <hr className="hr"/>
              <ul className="res-ul">
                 {
                   project.map((i)=><ProjectCard key={i.id} proj={i} />)
                 }
              </ul>
           </div>

           {
            Expr.length!=0?
            <div>
               <h5 className="head55"> WORK EXPERIENCE </h5>
               <hr className="hr"/>
               <ul className="res-ul">
                 {
                    Expr.map((i)=><ResWorkExp key={i.id} workObj={i}/>)
                 }
               </ul>
            </div>
            :''
           }

           <div>
            <h5 className="head55"> LANGUAGES </h5>
            <hr className="hr"/>
            <p className="para5"> English </p>
           </div>

           <div>
            <h5 className="head55"> DECLARATION </h5>
            <hr className="hr"/>
            <p className="para5"> 
              I hereby declare that the above-mentioned information is true to the best of my knowledge and belief.
            </p>
           </div>

           <p className="para5"> Signature:&nbsp;{firstName}</p>

      </div>
    </div>
   )
}

export default Resume