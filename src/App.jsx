import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route,useLocation } from 'react-router-dom'
import Navbar from './components/navBar/NavBar';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/homepage/Homepage';
import Contact from './pages/contactpage/Contactpage';
import About from './pages/aboutpage/Aboutpage';
import Skill from './pages/skillspage/Skillspage';
import Project from './pages/projectpage/Projectpage';
const App = () => {
  return (
    <div className='app'>
 <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
 </Router>
 </div>
  )
}

export default App
