import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';

function App() {
    const [count, setCount] = useState<number>(0)

    useEffect( () => {
        let valueAsString = localStorage.getItem('countValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [] )

    useEffect( () => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count] )

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