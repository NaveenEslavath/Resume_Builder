import React from "react";
import './Education.css'
import DeleteIcon from '@mui/icons-material/Delete';

const Education=(props)=>{

    const {idx,eduOb,updEduFunc,fun6}=props

    const {id,school,start,end,cgpa,degree}=eduOb

    const handleEduFunc=(field)=>(event)=>{
        updEduFunc(id,{[field]:event.target.value})   
    }

   
    const delEduItemFunc=()=>{
        fun6(id)
    }

    return(
        <div>

                <div className="del-con">
                <h5> {`Education ${idx}`}</h5>
                <button onClick={delEduItemFunc} className="del-box">
                 < DeleteIcon style={{fontSize:'16px'}}/>
                </button>
                </div> 
                <div className="mm1">
                <label htmlFor={`school${idx}`} className="label1"> School Name </label>
                <br/>
                <input type="text" placeholder="Enter your school name" id={`school${idx}`} className="inp1" value={school} onChange={handleEduFunc('school')}/>
                </div>


               <div className="cmn-con1">

                <div>
                <label htmlFor={`start${idx}`} className="label1"> Start Year </label>
                <br/> 
                <input type="number" min="1900" max="2100" placeholder="Start Year" className="year" id={`start${idx}`}  step="1" value={start} onChange={handleEduFunc('start')}/>
                </div>

                <div className="ex1">
                <label htmlFor={`end${idx}`} className="label1"> End Year </label>
                <br/> 
                <input type="number" min="1900" max="2100" placeholder="End Year" className="year" id={`end${idx}`}  step="1" value={end} onChange={handleEduFunc('end')}/>
                </div>

                </div>

                <div className="mm1">
                <label htmlFor={`cgpa${idx}`} className="label1"> CGPA </label>
                <br/>
                <input type="text" placeholder="Enter your cgpa" id={`cgpa${idx}`} className="inp1" value={cgpa} onChange={handleEduFunc('cgpa')}/>
                </div>

                <div>
                    <label className="label1" htmlFor={`degree${idx}`}> Degree </label>
                    <br/>
                    <select id={`degree${idx}`} className="sel" value={degree} onChange={handleEduFunc('degree')}>
                        <option value="" disabled selected> Select Your Degree </option>
                        <option value="High School"> High School </option>
                        <option value="Intermediate"> Intermediate </option>
                        <option value="Diploma"> Diploma </option>
                        <option value="Bachelor's Degree"> Bachelor's Degree </option>
                    </select>
                </div>

            </div>
    )
}

export default Education


/*
 const firFunc=(event)=>{
       fun1(id,event.target.value)
    }

    const secFunc=(event)=>{
        fun2(id,event.target.value)
    }

    const thrFunc=(event)=>{
        fun3(id,event.target.value)
    }

    const frthFunc=(event)=>{
        fun4(id,event.target.value)
    }

    const fifFunc=(event)=>{
        fun5(id,event.target.value)
    }
*/