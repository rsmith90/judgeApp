import React from 'react'
import './HomeScreen.css'
import NavBar from '../components/Navbar'
import About from '../components/About'
import Table from '../components/Table'
import Footer from '../components/Footer'
import Leaderboard2 from '../components/Leaderboard2'

function HomeScreen() {
  return (
    <div>
      <NavBar className="sticky" />
      {/* <About /> */}
      <Leaderboard2 />
      <Table />
      <Footer />
    </div>
  )
}

export default HomeScreen