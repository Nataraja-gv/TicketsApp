import React from 'react';
import "./Style/Event.css"
import toco from "../../assets/Frame 427319547.png"
import exit from "../../assets/ri_share-2-line.png"
const Event = (props) => {
    return (
        <div className='Event-main-container'>
            <div className='event-image-container'>
                <img src={props.Image} alt='' className='event-image'/>
                <div className='event-amount-section'>
                    <p> &#8377;{props.Price}<span> Onwords </span> </p>
                    <img src={toco}  style={{marginRight:"2%",marginBottom:"2px"}} className='toco-image'/>
                </div>
            </div>

            <div className='evnet-amount-brand-container'>
                 

                <div className='event-djanjessh-section'>
                    <p>Pub | EDM  | Dj Anjeesh</p>
                </div>

            <div className='Event-titile-container'>
                <h2>{props.EventName}</h2>
            </div>

            <div className='event-place-container'>
                <p>{props. Location},{props.Place}</p>
            </div>

            <div className='event-date-container'>
                <p>24th March - 25th March</p>
            </div>
            </div>

            <div className='event-exit-container'>
                <img src={exit} alt='' className='exit-event-image'/>
            </div>
        </div>
    );
}

export default Event;
