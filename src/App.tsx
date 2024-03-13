import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)

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

    const resetCounter = (startValue: number) => {
        setCount(startValue)
    }

    const addStartValue = (startValue: number) => {
        setStartValue(startValue)
    }
    const addMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }

    const setLimitValues = () => {
        setCount(startValue)
        setMaxValue(maxValue)
    }

    return (
        <div className='App'>
            <Settings 
                maxValue={maxValue}
                startValue={startValue}
                setLimitValues={setLimitValues}
                addStartValue={addStartValue}
                addMaxValue={addMaxValue}
                />
            <Counter
                count={count}
                startValue={startValue}
                maxValue={maxValue}
                incrementCounter={incrementCounter}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;