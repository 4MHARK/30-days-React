import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white p-4 flex justify-between items-center'>
      <h1>My Apps</h1>

      <div className='flex gap-4'>
        <a href="#" className='hover:text-blue-300'>Home</a>
        <a href="#" className='hover:text-blue-300'>About</a>
        <a href="#" className='hover:text-blue-300'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar