import React,{useState} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar=()=>{


    const [toggle,setToggle]=useState(false)

    const toggleFunc=()=>{
        setToggle(prevToggle=>!prevToggle)
    }

   return (
    <div>
    <nav className='nav'>
      
      <div className='ham-con'>
      <button className='ham-butt' onClick={toggleFunc}><MenuIcon/></button>
      <div className='nav-align'>
      <img className='logo' src='https://res.cloudinary.com/djzenbn7g/image/upload/v1729355858/qvb11dakwtho7hbgmqvb.jpg' alt='resume_logo'/>
      <h4 className='resume-builder-head'> Resume Builder </h4>
      </div>
      </div>

      <ul className='nav-ul'>
        <a href='#home' className='anc'><li className='nav-li'> Home </li></a>
        <a href='#features' className='anc'><li className='nav-li marg'> Features </li></a>
        <a href='#design_resume' className='anc'><li className='nav-li'>  Design Resume </li></a>
      </ul>

    </nav>

    {toggle?
    <aside className='aside'>
    <ul className='nav-sm-ul'>
      <a href='#home' className='anc'><li className='nav-li marg-sm'> Home </li></a>
      <a href='#features' className='anc'><li className='nav-li marg-sm'> Features </li></a>
      <a href='#design_resume' className='anc'><li className='nav-li marg-sm'>  Design Resume </li></a>
      </ul>
    </aside>:''
}
    </div>
   )
}

export default Navbar