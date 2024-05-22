import React from 'react';
import "./Style/Notication.css"
import { FcOk } from "react-icons/fc";

const Notification = () => {
    return (
        <div className='Notification-main-container'>
        <h1>Notications</h1>

        <div className='notification-card-container'>
           <div className='notification-sucess-icon'>
           <FcOk />
           </div>

           <di className="notification-content-container">
            <h2>Success</h2>
            <p>Anyone with access can view your invited visitors</p>
           </di>
        </div>
            
        </div>
    );
}

export default Notification;
