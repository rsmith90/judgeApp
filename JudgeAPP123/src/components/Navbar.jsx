import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from '../routes/About';
import App from '../routes/App';
import Home from '../routes/Home';
import ThemeChanger from './ThemeChanger'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <BrowserRouter>
            <div>
                <nav className="navbar flex place-content-between bg-base-100 shadow-md sticky top-0 z-10">

                    {/* Left Side Panel Menu */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <a className="btn btn-ghost normal-case text-xl">Judge Placements</a>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link to="/Home">Home</Link></li>
                            <li>
                                <Link to="Results" className="justify-between">Results
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/Skaters">Skaters</Link></li>
                            <li><Link to="/Messages">Messages</Link></li>
                            <li><Link to="/FindRinks">Find Rinks</Link></li>
                        </ul>
                    </div>
                    {/* Left Side Panel Menu */}
                    <div className="flex-none gap-2">
                        {/* search box */}
                        <div className="form-control hidden">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
                        {/* search box */}
                        {/* Right Side Panel Menu */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to="/Profile">Profile</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/Help">Help</Link></li>
                                <li><Link to="/ContactUs">Contact Us</Link></li>
                                <li className='grid'><Link to="/Settings">Settings</Link><ThemeChanger /></li>
                                <li><Link to="SignUp">Logout</Link></li>
                            </ul>
                        </div>
                        {/* Right Side Panel Menu */}

                    </div>
                </nav>
                <Routes >
                <Route exact path="/home" element={Home} />
                <Route path="/about" element={About} />
                </Routes>
            </div>
        </BrowserRouter >
    )
}

{/* 
<Route exact path="/" component={Home} />
<Route path="/about" component={About} /> 
*/}
