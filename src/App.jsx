import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img className='w-[276px]' src="/googlepng.png" alt="" />
      <input className='border-2 border-[#E3E3E3] w-[582px] h-[44px] rounded-full' type="text" />
    </div>
  )
}

export default App
