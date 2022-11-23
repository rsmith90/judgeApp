import React from 'react'

export default function Logos() {
  return (
    <div class="grid grid-flow-col grid-cols-4">
        <a href="https://vitejs.dev" target="_blank" class="logo-container">
          <img src="/viteLogo.svg" className="logo vite" alt="Vite logo" />
          <p>Vite</p>
        </a>
        <a href="https://beta.reactjs.org/" target="_blank" class="logo-container">
          <img src="/reactLogo.svg" className="logo react" alt="React logo" />
          <p>React</p>
        </a>
        <a href="https://tailwindcss.com/docs" target="_blank" class="logo-container">
          <img src="/tailwindLogo.svg" className="logo tailwind" alt="Tailwind logo" />
          <p>Tailwind</p>
        </a>
        <a href="https://daisyui.com/docs/install/" target="_blank" class="logo-container">
          <img src="daisyLogo.png" className="logo daisy" alt="DaisyUI logo" />
          <p>DaisyUI</p>
        </a>
      </div>
  )
}
