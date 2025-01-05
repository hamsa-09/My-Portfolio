import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route,useLocation } from 'react-router-dom'

import Portfolio from './pages/portfolio/Portfolio';

const App = () => {
  return (
    <div className='app'>
 <Router>
    <Routes>
        <Route path="/" element={<Portfolio />} />
    </Routes>
 </Router>
 </div>
  )
}

export default App
