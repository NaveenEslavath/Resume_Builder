import React from 'react'
import './CreateResume.css'
import { useNavigate } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const CreateResume=()=>{

  const navigate1=useNavigate()

  const myResumeFunc=()=>{
     navigate1('/form')
  }
    


   return(
    <div className='container' id='design_resume'>
        <h4 className='res-head4'> Create your resume in 3 easy steps now </h4>
        <p className='res-para4'> Creating a job winning resume can be a daunting task. Our resume buider makes it as easy as filling in the blanks.</p>
        <button className='create-my-resume-butt' onClick={myResumeFunc}> Create my resume </button>

        <VerticalTimeline >
        <VerticalTimelineElement date="Step 1">
          <h3 >Add your information</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="Step 2">
          <h3>Preview your live resume</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="Step 3">
          <h3>Simply download your resume</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
  
    </div>
   )
}

export default CreateResume