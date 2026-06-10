import React from 'react'

const Change = () => {
    const handleChange = (event) => {
        console.log(`Input changed: ${event.target.value}`);
    }
  return (
    <div className="space-y-4 ">
        <input placeholder='Type Something' onChange={handleChange}  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"/>
        <select onChange={handleChange}  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
        </select>
    </div>
  )
}

export default Change