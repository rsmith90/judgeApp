import React from 'react'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Leaderboard />
      <About />
    </div>
  )
}

export default App
