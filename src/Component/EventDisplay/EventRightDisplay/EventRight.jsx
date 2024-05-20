import React from 'react';
import "./EventRight.css";
import { GiLoveSong } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline, IoWalletOutline } from "react-icons/io5";
import drava from "./Drava.png";

const EventRight = ({props}) => {
    return (
        <div className='eventRight-main-container'>
            <div className='eventright-event-details-container  rounded-lg'>
                <h1>{props.EventName}</h1>
                <div className='eventright-event-details-dj-section'>
                    <GiLoveSong />
                    <p>Dj Anjeesh</p>
                </div>
                <div className='eventright-event-details-calender-section'>
                    <CiCalendarDate />
                    <p>Sat, 9th Oct</p>
                </div>
                <div className='eventright-event-details-location-section'>
                    <IoLocationOutline />
                    <p>{props.Location}, {props.Place}</p>
                </div>
                <div className='eventright-event-details-amount-container'>
                    <div className='event-details-amount-section'>
                        <IoWalletOutline className='wallet-icon' />
                        <h4>&#8377;{props.Price} <span>Onwards</span></h4>
                    </div>
                    <div className='event-details-btn-section'>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>

            <div className='eventright-event-host-container'>
                <h1>Event Host / Organizer</h1>
                <div className='eventright-event-host-brand-section'>
                   <di className="eventright-host-Image-section"><img src={drava} alt='Host' className=' eventright-host-Image'/></di>  
                    <h3>DRAVA, Kormagala</h3>
                </div>
            </div>

            <div className='eventright-event-location-container'>
                <div className='eventright-address-section'>
                    <h1>Venue Details</h1>
                    <address>
                        The Big Baadshah,<br/>
                        88, 2nd Floor, Outer Ring Rd, near More Supermarket,<br/>
                        Marathahalli, Bengaluru, Karnataka 560137
                    </address>
                </div>
                <div className='eventright-googlemap'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5797475341074!2d77.61331787569802!3d12.934710215684722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1547638bc6a3%3A0xb91555c5de65883f!2sDrava%20Pub!5e0!3m2!1sen!2sin!4v1716135874924!5m2!1sen!2sin" 
                        width="100%" 
                        height="350" 
                        className='eventright-googlemap'
                        allowFullScreen="" 
                        loading="lazy" 
                         >
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default EventRight;
