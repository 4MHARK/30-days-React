import React, { useState } from 'react'

const Objects = () => {
    const [user, setUser] = useState({
        name: "Ademola",
        age: 20,
        email: "mh4rk@duck.com"
    })  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <input type="text" className="rounded-lg m-4 border border-gray-300 p-4 focus:outline-none focus:border-blue-500" onChange={(e) => setUser({...user, name: e.target.value})} />
        <input type="text" className="rounded-lg m-4 border border-gray-300 p-4 focus:outline-none focus:border-blue-500" onChange={(e) => setUser({...user, age: e.target.value})} />
        <input type="text" className="rounded-lg m-4 border border-gray-300 p-4 focus:outline-none focus:border-blue-500" onChange={(e) => setUser({...user, email: e.target.value})} />
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.email}</h1>
    </div>
  )
}

export default Objects