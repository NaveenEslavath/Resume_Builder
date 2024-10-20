import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import CreateResume from './CreateResume'
import Features from './Features'
import Footer from './Footer'

const Home=()=>{
  
    return(
        <div>
        <Navbar/>
        <div className='home' id='home'>
           <h4 className='home-head'>
            Now create your own resume <br/>
            through our resume builder !!
           </h4>
           <button className='get-started'> Get Started</button>
        </div>
        <CreateResume/>
        <Features/>
        <Footer/>
        </div>
    )
}

export default Home