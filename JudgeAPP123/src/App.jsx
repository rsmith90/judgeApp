import React from 'react'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'
import About from './components/About'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Navbar2 /> */}
      <div className="App">
        <Leaderboard />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App