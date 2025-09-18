import React, { useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    function handleReduce(){
        setCount(count - 1);
    }

    return(
        <>
            <button onClick={handleClick}>Click Me!!</button>
            <h1>Count : {count}</h1>
            <button onClick = {handleReduce}>Tagginchu</button>
        </>
    )
}

export default App2;