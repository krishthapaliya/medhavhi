import React from 'react'
import logo from '../assets/logo.webp'
const Nabbar = () => {
  return (
<navbar>
<div className='flex  justify-between items-center px-24 py-1'>
    <div><img src={logo} alt='logo'/></div>
    <div>
    <button className='text-base font-sans font-semibold px-4 '> Login</button>
    <button className='bg-white text-base font-sans font-semibold  text-[#27aaf1]  border-stone-800 shadow-xl rounded-md py-3 px-4'>Sign Up</button>
    </div>
</div>
</navbar>

  )
}

export default Nabbar