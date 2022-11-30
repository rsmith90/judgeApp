import { useState } from 'react'
import Logos from './Logos'

export default function About() {
    const [count, setCount] = useState(0)

    return (
        <div className='grid'>
        <Logos />
            <div className="card">
                <button
                    className="btn btn-primary"
                    onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite + React + Tailwind logos to learn more!
            </p>
        </ div>
    )
}
