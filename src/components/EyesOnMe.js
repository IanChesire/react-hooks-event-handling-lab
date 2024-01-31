// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    const handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }
  return (
    <div>
        <button onFocus={() => console.log('Good!')}  onBlur={handleBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;