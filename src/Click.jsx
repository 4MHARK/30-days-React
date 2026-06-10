import React from 'react'

const Click = () => {
    const handleClick = ()=>{
        alert("Hello!")
    }
  return (
    <div>
        <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default Click