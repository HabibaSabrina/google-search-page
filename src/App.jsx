import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaBeer, FaPlus, FaSearch } from 'react-icons/fa';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[582px] mx-auto my-44' >
      <img className='w-[276px] mx-auto mb-7' src="/googlepng.png" alt="" />
     <div className='relative '>
     <FaSearch className='text-[#aaaaaa] text-sm top-4 left-5 absolute'></FaSearch>
     <input className='border border-[#E3E3E3] w-full h-[44px] rounded-full focus:outline-none pl-12' type="text" placeholder='Search Google or type a URL'/>
     <div className='flex items-center gap-5 absolute top-4 right-6'>
      <img className='w-3' src="/voice.png" alt="" />
      <img className='w-3' src="/image.png" alt="" />
     </div>
     </div>
     <div className='text-center mt-10'>
     <button className='text-xl font-extralight p-4  rounded-full bg-[#f5f3f3]'><FaPlus></FaPlus></button>
     <p className='font-normal text-xs my-5'>Add shortcut</p>
     </div>
     
    </div>
  )
}

export default App
