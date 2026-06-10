import React from 'react'

const Mouse = () => {
    const handleMouseOver =() =>{
        console.log("Mouse entered!")
    }
    const handleMouseOut =() =>{
        console.log("Mouse left!")
    }
    const handleDoubleClick =() =>{
        console.log("Mouse double clicked!");
    }
    const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key)
}
const handleFocus = () =>{
    console.log("Input focused!")
}
const handleBlur = () =>{
    console.log("input blurred!")
}
const handleChange = (event) =>{
    console.log("Input value changed:", event.target.value)
}
  return (
    <div>
        <p onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut}>Paragraph</p>
        <button onDoubleClick = {handleDoubleClick} >Button</button>
        <input onKeyDown={handleKeyDown} onFocus= {handleFocus} onBlur={handleBlur} onChange={handleChange} placeholder="Type something" />
    </div>
  )
}

export default Mouse