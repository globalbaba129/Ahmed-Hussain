
import './App.css'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Card from './pages/card';
import Conn from './DBConnection/Conn'

function App() {


  return (
    <>
    <Conn/>
 {/* <Nar/>
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/card" element={<Card />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App
