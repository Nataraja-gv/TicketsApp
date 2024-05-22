import "./App.css";
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/HomeDisplay/Home"
import Footer from "./Component/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  EventDisplay from "./Component/EventDisplay/EventDisplay"
import FooterNavbar from "./Component/FooterNavbar/FooterNavbar" 
import Notification from "./Component/Pages/Notification"
import Book from "./Component/Pages/Book"
import Profile from "./Component/Pages/Profile"

function App() {
  return <div>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element= {<Home/>}></Route>
    <Route path="EventDisplay/" element={<EventDisplay/>}>
    <Route path=":EventID" element={<EventDisplay/>}></Route>
      
    </Route>

    <Route path="/Notifications" element={<Notification/>}></Route>
    <Route path="/Book" element={<Book/>}></Route>

    <Route path="/Profile" element={<Profile/>}></Route>

    </Routes>
     
     <div className="app-desktop-mobile-footer-container">
      <div className="desktop-footer-container">
     <Footer/>
      </div>

      <div className="mobile-footer-container">
        <FooterNavbar/>
      </div>
     </div>
  </BrowserRouter>
    
  </div>;
}

export default App;
