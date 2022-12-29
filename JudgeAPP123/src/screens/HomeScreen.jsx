import React from 'react'
import './HomeScreen.css'
import NavBar from '../components/Navbar'
import About from '../components/About'
import Table from '../components/Table'

function HomeScreen() {
  return (
    <div>
      <NavBar className="sticky" />

      <About />


      <Table />
    </div>
  )
}

export default HomeScreen