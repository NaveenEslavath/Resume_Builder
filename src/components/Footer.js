import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Footer=()=>{
   return (
    <div>
        <div className='footer'>
            <div>
            <h6 className='head66'> About the Resume Builder </h6>
            <p className='para66'>
              Our Resume Builder app is designed to help users create professional and personalized resumes with ease. Whether you're a student, job seeker, or professional, our app offers customizable templates, real-time previews, and downloadable formats to ensure your resume stands out. With an intuitive interface and responsive design, you can quickly craft your resume to highlight your skills and experiences, ready for the next opportunity.
            </p>
            <ul className='footer-ul'>
                <li className='footer-li'>
                    <a className='anch' href='https://www.linkedin.com/in/naveen-eslavath-9a7666255' target='_blank'>
                    <button className='iconm'>
                      <LinkedInIcon/>
                    </button>
                    </a>
                </li>
                <li className='footer-li'>
                    <a className='anch' href='https://github.com/NaveenEslavath' target='_blank'>
                    <button className='iconm'>
                      <GitHubIcon/>
                    </button>
                    </a>
                </li>
                
                <li className='footer-li'>
                    <a className='anch' href='https://x.com/' target='_blank'>
                    <button className='iconm'>
                      <TwitterIcon/>
                    </button>
                    </a>
                </li>
                <li className='footer-li'>
                <a className='anch' href='https://www.facebook.com/' target='_blank'>
                    <button className='iconm'>
                      <FacebookIcon/>
                    </button>
                    </a>
                </li>
            </ul>
            </div>

            <div className='side'>
                <div className='cmn-alig'>
                    <button className='icon2'>
                    <LocationOnIcon />
                    </button>
                    <p className='footer-para'>
                        Parvathagiri&nbsp;,&nbsp;Warangal<br/> Telangana&nbsp;,&nbsp;India
                    </p>
                </div>

                <div className='cmn-alig'>
                    <button className='icon2'>
                    <PhoneIcon />
                    </button>
                   
                    <p className='footer-para'>
                        (+91) 6281230648
                    </p>
                   
                </div>

                <div className='cmn-alig'>
                    <button className='icon2'>
                    <MailIcon />
                    </button>
                    <a href='mailto: nayaknaveen726@gmail.com' className='anch'>
                    <p className='footer-para '>
                    nayaknaveen726@gmail.com
                    </p>
                    </a>
                </div>

            </div>

        </div>
        <p className='copyrght'>
            &copy; 2024 Resume Builder. All rights are reserved.
        </p>
    </div>
   )
}

export default Footer 