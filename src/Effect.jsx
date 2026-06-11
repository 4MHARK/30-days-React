import React, { useEffect } from 'react'

const Effect = () => {
    useEffect (() =>{
        console.log("Component Loaded");
        document.title = "React Title App"
    }, [])
  return (
    <div className='p-8'>
        <h1 className='text-xl font-bold'>Check The Browser tab Title!</h1>
    </div>
  )
}

export default Effect

// import { useEffect } from "react"

// const UseEffect = () => {
//     useEffect(() => {
//         console.log("Component loaded!")
//         document.title = "My React App 🔥"
//     }, []);

//     return (
//         <div className="p-8">
//             <h1 className="text-2xl font-bold">Check the browser tab title!</h1>
//         </div>
//     )
// }

// export default UseEffect