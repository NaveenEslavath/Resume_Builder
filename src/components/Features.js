import React from "react";
import './Features.css'
import BoltIcon from '@mui/icons-material/Bolt';
import GradingIcon from '@mui/icons-material/Grading';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Features=()=>{
  return (
    <div className="feat-con" id="features">
        <h4 className="feat-head"> Features of Resume Builder </h4>
        <ul className="feat-ul">
            <li className="feat-li">
               <span> <BoltIcon/> </span>
               <p className="feat-para"> Easy and simpler way to create your resume </p>
            </li>
            <li className="feat-li mdl">
               <span> <GradingIcon/> </span>
               <p className="feat-para"> Users can preview their live resume and save as a draft </p>
            </li>
            <li className="feat-li">
               <span> <DownloadForOfflineIcon/> </span>
               <p className="feat-para"> Users can also download the resume in a pdf format </p>
            </li>
        </ul>
    </div>
  )
}

export default Features