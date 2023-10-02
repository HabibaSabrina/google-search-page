import React from 'react';

const Footer = () => {
    return (
        <div className='max-sm:hidden pt-1'>
           <div className='text-[#7B7B7B]  p-5  bg-[#F2F2F2]'>
            <p>Bangladesh</p>
            </div> 
           <div className='border-t border-[#d4d3d3] text-[#7B7B7B] flex justify-between p-5 bg-[#F2F2F2]'>
            <div className='flex gap-5'>
                <p className='hover:underline cursor-pointer'>About</p>
                <p className='hover:underline cursor-pointer'>Advertising</p>
                <p className='hover:underline cursor-pointer'>Business</p>
                <p className='hover:underline cursor-pointer'>How Search works</p>
            </div>
            <div className='flex gap-5'>
                <p className='hover:underline cursor-pointer'>Privacy</p>
                <p className='hover:underline cursor-pointer'>Terms</p>
                <p className='hover:underline cursor-pointer'>Settings</p>
                
            </div>
            </div> 
        </div>
    );
};

export default Footer;