import React from 'react'
// import '../styles/HomeScreen.css'
import Navbar from '../components/Navbar'
import NavBar2 from '../components/NavBar2'
import Banner from '../components/Banner'
import About from '../components/About'
import Hero from '../components/Hero'
import Leaderboard from '../components/Leaderboard'
import Map from '../components/Map'
import Footer from '../components/Footer'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* <Navbar /> */}
            <NavBar2 />

            <Banner />
            <Leaderboard />
            <About />
            
            {/* <Hero /> */}
            <Footer />
            {/* Row */}
            {/* ^^^ locations of nearby rinks ^^^ */}
        </div>
    )
}

export default HomeScreen