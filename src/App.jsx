import "./App.css";
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/HomeDisplay/Home"
import Footer from "./Component/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  EventDisplay from "./Component/EventDisplay/EventDisplay"
import FooterNavbar from "./Component/FooterNavbar/FooterNavbar" 
function App() {
  return <div>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element= {<Home/>}></Route>
    <Route path="EventDisplay/" element={<EventDisplay/>}>
    <Route path=":EventID" element={<EventDisplay/>}></Route>
      
    </Route>
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
