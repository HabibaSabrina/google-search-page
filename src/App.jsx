import { useState } from 'react'

import './App.css'
import { FaKeyboard, FaPlus, FaSearch, FaTh } from 'react-icons/fa';
import Footer from './components/Footer';

function App() {
  
  

  return (
    <div>
      {/* side navbar */}
      <div className='flex items-center gap-5 absolute top-5 right-0'>
        <p className='hover:underline font-normal cursor-pointer'>Gmail</p>
        <p className='hover:underline font-normal cursor-pointer'>Images</p>
        <button className='text-[#7B7B7B] hover:bg-[#F8F8F8] p-3 rounded-full'><FaTh></FaTh></button>
        <button className='text-white px-5 bg-[#1A73E8] py-2 font-semibold rounded '>Sign In</button>
        <p></p>
      </div>
      <div className='md:w-[582px] max-sm:px-5 mx-auto my-44' >
        {/* logo image */}
      <img className='w-[276px] mx-auto mb-7' src="/googlepng.png" alt="" />
      {/* search input field */}
     <div className='relative'>
     <FaSearch className='text-[#aaaaaa] text-sm top-4 left-5 absolute'></FaSearch>
     <input className='border border-[#E3E3E3] w-full h-[44px] rounded-full focus:outline-none pl-12 max-sm:placeholder:text-white' type="text" placeholder='Search Google or type a URL'/>
     <div className='flex items-center gap-5 absolute top-3 right-6'>
      <FaKeyboard></FaKeyboard>
      <img className='w-3' src="/voice.png" alt="" />
      <img className='w-3' src="/image.png" alt="" />
     </div>
     </div>
     {/* buttons */}
     <div className='flex gap-5 justify-center mt-8'>
     <button className='text-[#7B7B7B] bg-[#F8F8F8] font-semibold py-2 px-4 rounded'>Google Search</button>
     <button className='text-[#7B7B7B] bg-[#F8F8F8] font-semibold py-2 px-4 rounded'>I&apos;m feeling Lucky</button>
     </div>
     
    </div>
    {/* footer section */}
    <Footer></Footer>
    
    </div>
  )
}

export default App
