import { useState } from 'react'

import './App.css'
import { FaKeyboard, FaPlus, FaSearch } from 'react-icons/fa';

function App() {
  
  

  return (
    <div>
      <div>
        <p className='hover:underline font-normal'>Gmail</p>
        <p className='hover:underline font-normal'>Images</p>
        <p></p>
      </div>
      <div className='w-[582px] mx-auto my-44' >
      <img className='w-[276px] mx-auto mb-7' src="/googlepng.png" alt="" />
     <div className='relative '>
     <FaSearch className='text-[#aaaaaa] text-sm top-4 left-5 absolute'></FaSearch>
     <input className='border border-[#E3E3E3] w-full h-[44px] rounded-full focus:outline-none pl-12' type="text" placeholder='Search Google or type a URL'/>
     <div className='flex items-center gap-5 absolute top-3 right-6'>
      <FaKeyboard></FaKeyboard>
      <img className='w-3' src="/voice.png" alt="" />
      <img className='w-3' src="/image.png" alt="" />
     </div>
     </div>
     <div className='flex gap-5 justify-center mt-8'>
     <button className='text-[#7B7B7B] bg-[#F8F8F8] font-semibold py-2 px-4 rounded'>Google Search</button>
     <button className='text-[#7B7B7B] bg-[#F8F8F8] font-semibold py-2 px-4 rounded'>I&apos;m feeling Lucky</button>
     </div>
     
    </div>
    
    </div>
  )
}

export default App
