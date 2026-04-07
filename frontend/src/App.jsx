import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
