import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

export const counterMessages = {
    confirm: 'Press \'Confirm\' to continue',
    error: 'Incorrect value!'
} as const

function App() {

    const loadedMaxValue = localStorage.getItem("maxValue")
    ? JSON.parse(localStorage.getItem("maxValue") as string)
    : []; 

    const loadedStartValue = localStorage.getItem("startValue")
    ? JSON.parse(localStorage.getItem("startValue") as string) 
    : [];

    const [maxValue, setMaxValue] = useState<number>(loadedMaxValue)
    const [startValue, setStartValue] = useState<number>(loadedStartValue)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<string>('')

    useEffect( () => {
        let currentCount = localStorage.getItem('countValue')
            if (currentCount) {
                setCount(JSON.parse(currentCount))
            }
    }, [] );

    useEffect( () => {
        localStorage.setItem('countValue', JSON.stringify(count))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [count, maxValue, startValue] );

    const addMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    };

    const addStartValue = (startValue: number) => {
        setStartValue(startValue)
    };

    return (
        <div className='App'>
            <Settings
                setError={setError}
                startValue={startValue}
                maxValue={maxValue}
                setCount={setCount}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
            />
            <Counter
                error={error}
                count={count}
                startValue={startValue}
                maxValue={maxValue}
                setCount={setCount}
            />
        </div>
    );
};

export default App;