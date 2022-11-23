import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwind from './assets/Tailwind_CSS_Logo.svg'
import Wheel from './assets/Wheel.png'
import Example from './components/Example'
import Daisy from './assets/Daisy.png'
import Test from './components/Test'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>

        <Test />
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://beta.reactjs.org/" target="_blank">
          <img src={Wheel} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/docs" target="_blank">
          <img src={tailwind} className="logo tailwind" alt="Tailwind logo" />
        </a>
        <a href="https://daisyui.com/docs/install/" target="_blank">
          <img src={Daisy} className="logo Daisy" alt="DaisyUI logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind + DaisyUI</h1>
      <div className="card">
        <button
          class="btn btn-primary"
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
      <Example />
    </div>
  )
}

export default App
