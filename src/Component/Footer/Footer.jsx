import React from 'react';
import "./Footer.css";
import yp from "../../assets/yq-removebg-preview.png"
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
    return (
        <div className='Footer-main-container'>
        
              <div className='footer-top-container'>

                <div className="footer-Website-container">
                    <img src={yp} alt='' className='footer-image-image'/>
                </div>

                <div className="footer-partner-container">
                    <h1 className='footer-title'>Partner With US</h1>
                    <li>Host a Event</li>
                    <li>Sell Tickets Online</li>
                </div>


                <div className="footer-Company-container">
                    <h1 className='footer-title'>Company</h1>
                      <ul className='footer-company-section'>
                      <ul> <li>About us</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Privacy Policy</li></ul>

                    <ul> <li>Testimonials</li>
                    <li>Contact us</li>
                    <li>Terms  & Conditions</li>
                     </ul>
                      </ul>
                       
                </div>


                <div className='footer-stay-conatiner'>
                    <h1 className='footer-title'>Stay up to date</h1>
                    <div className='footer-input-conatiner'>
                        <input type='text' placeholder='Your email address'  className='Your-email-address'/>
                        <IoPaperPlaneOutline className='footer-share-image' />
                    </div>
                    <div className='footer-social-media-conatiner'>
                    <IoLogoInstagram  className='footer-social-icon'/>
                    <FaFacebookF className='footer-social-icon'/>
                    <BsTwitterX className='footer-social-icon'/>
                    <IoLogoLinkedin className='footer-social-icon'/>
                    </div>
                </div>
              </div>

              <div className='Footer-bottom-container'>
                   <p>Copyright © 2023 TicketsQue Pvt. Ltd. All rights reserved</p>
              </div>
        </div>
    );
}

export default Footer;
