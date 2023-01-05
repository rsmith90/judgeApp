import React, { useState, useEffect } from 'react'
import '../../styles/NavBar2.css'


function NavBar2() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])


    return (
        <>

            <div className={`nav ${show && 'nav_color'}`}>
                {/* <div className="banner--fadeTop" /> */}
                <div className='nav_contents'>
                    <svg className='nav_logo' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p className=' nav_text'>Skaters Circle</p>


                    <img
                        className='nav_avatar'
                        src='https://placeimg.com/80/80/people'
                        alt='user profile picture'
                    />
                </div>
            </div>
        </>
    )
}

export default NavBar2