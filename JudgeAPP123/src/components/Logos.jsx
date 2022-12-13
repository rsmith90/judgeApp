import React from 'react'

export default function Logos() {
  return (
    <div className="text-center max-w-xl mx-auto grid grid-flow-col grid-cols-4">
      <a href="https://vitejs.dev" target="_blank" className="logo-container">
        <img src="/viteLogo.svg" className="max-h-fit logo vite" alt="Vite logo" />
        <p>Vite</p>
      </a>
      <a href="https://beta.reactjs.org/" target="_blank" className="logo-container">
        <img src="/reactLogo.svg" className="max-h-fit logo react" alt="React logo" />
        <p>React</p>
      </a>
      <a href="https://tailwindcss.com/docs" target="_blank" className="logo-container">
        <img src="/tailwindLogo.svg" className="max-h-fit logo tailwind" alt="Tailwind logo" />
        <p>Tailwind</p>
      </a>
      <a href="https://daisyui.com/docs/install/" target="_blank" className="logo-container">
        <img src="flower.png" className="w-fit logo daisy" alt="DaisyUI logo" />
        <p>DaisyUI</p>
      </a>
    </div>
  )
}
