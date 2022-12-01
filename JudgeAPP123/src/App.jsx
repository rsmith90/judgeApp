import React from 'react'
import Leaderboard from './components/Leaderboard'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="App">
        <Leaderboard />
        <About />
      </div>
      <Footer />
    </div>
  )
}

export default App


{/* <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
  <!-- ... -->
</div> */}
