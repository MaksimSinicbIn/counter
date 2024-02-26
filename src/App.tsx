import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';

function App() {
    const [count, setCount] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }
    
    return (
        <div >
            <Counter
                count={count}
                incrementCounter={incrementCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;