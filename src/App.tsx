import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

export const counterMessages = {
    confirm: 'Press \'Confirm\' to continue',
    error: 'Incorrect value!'
} as const

const DEFAULT_START_VALUE = 0
const DEFAULT_MAX_VALUE = 5

function App() {

    const [maxValue, setMaxValue] = useState<number>(() => {
        const loadedMaxValue = localStorage.getItem("maxValue")
        return loadedMaxValue ? JSON.parse(loadedMaxValue) : DEFAULT_MAX_VALUE
    })
    const [startValue, setStartValue] = useState<number>( () => {
        const loadedStartValue = localStorage.getItem("startValue")
        return loadedStartValue ? JSON.parse(loadedStartValue) : DEFAULT_START_VALUE;
    })
    const [count, setCount] = useState<number>(() => {
        const start = localStorage.getItem("startValue")
        // if (start) {
        //     return JSON.parse(start)
        // } 
        // ситуативная проверка, раскомментить по желанию
        let currentCount = localStorage.getItem('countValue')
        if (currentCount) {
            return JSON.parse(currentCount)
        }
        return DEFAULT_START_VALUE
    })
    const [error, setError] = useState<string>('')

    useEffect( () => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count, maxValue, startValue] );

    const addMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    };

    const addStartValue = (startValue: number) => {
        setStartValue(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
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