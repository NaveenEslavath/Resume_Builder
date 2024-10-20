import React from "react";
import {Routes,Route} from 'react-router-dom'
import Form from "./components/Form";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Project from "./components/Project";

const App=()=>{
return(
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  </div>
)
}

export default App

/*

*/