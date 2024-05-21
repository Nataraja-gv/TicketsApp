import React, { useContext } from "react";
import "./Eventdisplay.css";
import EventLeft from "./EventLeftDisplay/EventLeft"
import { EventContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import EventRight from "./EventRightDisplay/EventRight"
import Event from "../Pages/Event"


const EventDisplay = () => {
  const {eventDetails }=useContext(EventContext)
  
  const {EventID}=useParams();
  console.log(EventID,"id")

  const product=eventDetails.find((item)=>item.id===parseInt(EventID))
  console.log(eventDetails,"eventDetailscbjsdb") 
  return (
    <div> 
    <div className="event-display-main-container">
      <div className="event-display-left-conatiner">
        <div className="">
            <EventLeft props={product}/>
        </div>
      </div>
      <div className="event-display-right-conatiner">
      <EventRight props={product}/>

      </div>

       
    </div>
    <div className=' event-display-Second-container'>
           {eventDetails.slice(0,4).map((item,index)=>{return <Event key={index} Image={item.Image} Price={item.Price} EventName={item.EventName} Location={item.Location} Place={item.Place}/> })}
                
            </div>

    </div>
  );
};

export default EventDisplay;
