import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaBeer, FaSearch } from 'react-icons/fa';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img className='w-[276px]' src="/googlepng.png" alt="" />
     <div className='relative'>
     <FaSearch className='text-[#aaaaaa] text-sm top-4 left-5 absolute'></FaSearch>
     <input className='border border-[#E3E3E3] w-[582px] h-[44px] rounded-full focus:outline-none pl-12' type="text" placeholder='Search Google or type a URL'/>
     </div>
    </div>
  )
}

export default App
