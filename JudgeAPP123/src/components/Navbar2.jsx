import React from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { ImStatsDots } from 'react-icons/im';
import ThemeChanger from './ThemeChanger';

export default function Navbar2() {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font bold text-black'>JudgeApp</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Skaters</li>
                <li className='p-4'>Messages</li>
                <li className='p-4'>Results</li>
                <li className='p-4'>Rinks</li>
            </ul>
            <div>
                <HiOutlineMenu size={30} />
            </div>
            <div className='fixed left-0 top-0 w-[60%] border-r border-cyan-400'>
                <ul>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Skaters</li>
                    <li className='p-4'>Messages</li>
                    <li className='p-4'>Results</li>
                    <li className='p-4'>Rinks</li>
                </ul>
            </div>
        </div>
    )
}


// https://react-icons.github.io/react-icons/ for icons