import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2 bg-slate-500 text-amber-300'>
        <div className="logo">
            <span className="font-bold text-xl mx-8">Task List</span>
        </div>
        <ul className='flex gap-8 mx-8'>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>New tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar