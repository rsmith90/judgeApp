import React, { useState } from 'react';
import ThemeChanger from './ThemeChanger'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar flex place-content-between bg-base-100 shadow-md sticky top-0 z-10">

            {/* Left Side Panel Menu */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                    <a className="btn btn-ghost normal-case text-xl">Judge Placements</a>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                    <li><a>Home</a></li>
                    <li>
                        <a className="justify-between">
                            Results
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Skaters</a></li>
                    <li><a>Messages</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Help</a></li>
                </ul>
            </div>
            {/* Left Side Panel Menu */}

            {/* ThemeChanger */}
            {/* <div className="p-2">
                <ThemeChanger />
            </div> */}
            {/* ThemeChanger */}

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
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Help</a></li>
                        <li className='grid'><a>Settings</a><ThemeChanger /></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                {/* Right Side Panel Menu */}

            </div>
        </nav>
    )
}
