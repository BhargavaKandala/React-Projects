import React, { useState } from 'react'
//Buttons that count separately
export default function MyButton(){
    const [count, setCount] = useState(0);
    
    function handleCount(){
        setCount(count+1);
    }

    return(
        <>
            <button onClick={handleCount}>Click me</button>
            <h2>Clicked {count} times.</h2>
        </>
    )
};