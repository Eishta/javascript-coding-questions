
import React, { useState, useEffect } from 'react';
import Counter from './Counter';

const App = () => {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     const interval = setInterval(() => setCount(prev => prev + 1), 100)
    //     setTimeout(()=> clearInterval(interval), 5000)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <>
            <Counter count={count} />
            <button onClick={()=> setCount(prev => prev + 1)}>Click</button>
        </>

    )
}

export default App;
