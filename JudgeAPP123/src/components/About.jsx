import { useState } from 'react';
import Logos from './Logos';

export default function About() {
    const [count, setCount] = useState(0)

    return (
        <div className='h-screen grid-flow-row-dense bg-base-100'>
            {/* carousel */}
            <div className='inset-x-0 bottom-0 bg-[#242424] z-10'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* carousel */}
            <div className=''>
                <Logos />
                <div className="text-center m-4">
                    <button
                        className="btn btn-primary m-4"
                        onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
                <div className='bottom-0 m-4 p-4'>
                    <p className="text-center text-slate-400">
                        Click on the Vite + React + Tailwind logos to learn more!
                    </p>
                </div>
            </div>
        </ div>
    )
}

// container	None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;