import React from 'react';
import "./Style/MobileEvent.css"
// import toco from "../../assets/Frame 427319547.png"
import exit from "../../assets/share.png"
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShareAlt } from "react-icons/ai";
const MobileEvent = (props) => {
    return (
        <div className='MobileEvent-main-container'>
            <div className='Mobileevent-image-container'>
                <img src={props.Image} alt='' className='Mobileevent-image'/>
                {/* <div className='Mobileevent-amount-section'>
                    <p> &#8377;{props.Price}<span> Onwords </span> </p>
                    <img src={toco}  style={{marginRight:"2%",marginBottom:"2px"}} className='Mobiletoco-image'/>
                </div> */}
            </div>

            <div className='Mobileevnet-amount-brand-container'>
                 

                {/* <div className='Mobileevent-djanjessh-section'>
                    <p>Pub | EDM  | Dj Anjeesh</p>
                </div> */}

            <div className='MobileEvent-titile-container'>
                <h2>{props.EventName}</h2>
            </div>
            <div className='Mobileevent-date-container'>
            <SlCalender className='calender-mobileevent' /> <p>Sat, 9th Oct</p>
            </div>

            <div className='Mobileevent-place-container'>
            <CiLocationOn className='calender-mobileevent' /> <p>{props. Location},{props.Place}</p>
            </div>

            <div className='Mobileevent-amount-section'>
                    <p> &#8377;{props.Price}<span> Onwords </span> </p>
                     
                </div> 
            </div>
             

            <div className='Mobileevent-exit-container'>
                <img src={exit} alt='' className='Mobileexit-event-image'/>
            </div>
        </div>
    );
}

export default MobileEvent;
