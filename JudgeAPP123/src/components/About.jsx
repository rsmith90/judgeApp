import { useState } from 'react'
import Logos from './Logos'

export default function About() {
    const [count, setCount] = useState(0)

    return (
        <div className='grid-flow-row-dense m-4'>
            <Logos />
            <div className="m-4">
                <button
                    className="btn btn-primary m-4"
                    onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-slate-400">
                Click on the Vite + React + Tailwind logos to learn more!
            </p>
        </ div>
    )
}

// container	None	width: 100%;
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;