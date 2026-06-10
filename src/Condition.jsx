import React from 'react'

const Condition = () => {
    const isLoggedIn = false;
    const hasError = false;
    if(isLoggedIn){
        return<p>Logged In</p>
    }
    return <p>Not Logged In</p>

  return (
    <div>
        <div>
            {/* {isLoggedIn ? "Logged In" : "Not Logged In"}; */}
           
            {hasError && <p>SOmething Went Wrong</p> }
        </div>
    </div>
  )
}

export default Condition