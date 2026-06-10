import React from 'react'

const Card = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4'>
        <h2 className='text-xl font-bold text-gray-800'>Welcome To My App</h2>
        <p className='text-gray-600 text-sm'>This is a simple card component.</p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4'>Get Started</button>
    </div>
  )
}

export default Card