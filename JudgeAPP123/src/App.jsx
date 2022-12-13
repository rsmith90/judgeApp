import React from 'react'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import GetStarted from './components/GetStarted'

import './App.css'

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <GetStarted />
        {/* <Leaderboard /> */}
        <About />
      
      <Footer />
    </div>
  )
}

export default App