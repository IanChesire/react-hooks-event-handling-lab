// Code Keypad Component Here
import React from "react";

function Keypad (){
    const change = (e) => {
        e.preventDefault();
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange= {change}/>
        </div>
    )
}

export default Keypad;