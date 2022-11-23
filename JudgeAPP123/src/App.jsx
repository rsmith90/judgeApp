import { useState } from 'react'
import Example from './components/Example'
import Test from './components/Test'
import Logos from './components/Logos'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test />
      <Logos />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite + React + Tailwind logos to learn more!
      </p>
      <Example />
    </div>
  )
}

export default App
