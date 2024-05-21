import "./App.css";
import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/HomeDisplay/Home"
import Footer from "./Component/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  EventDisplay from "./Component/EventDisplay/EventDisplay"
 
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
     
    <Footer/>
  </BrowserRouter>
    
  </div>;
}

export default App;
