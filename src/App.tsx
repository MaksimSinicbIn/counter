import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
    const [errorStatus, setErrorStatus] = useState(false)
    const [error, setError] = useState<string>('')

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

    const addMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
    }
    const addStartValue = (startValue: number) => {
        setStartValue(startValue)
    }

    return (
        <div className='App'>
            <Settings
                setErrorStatus={setErrorStatus}
                setError={setError}
                startValue={startValue}
                maxValue={maxValue}
                setCount={setCount}
                addMaxValue={addMaxValue}
                addStartValue={addStartValue}
            />
            <Counter
                error={error}
                errorStatus={errorStatus}
                count={count}
                startValue={startValue}
                maxValue={maxValue}
                setCount={setCount}
            />
        </div>
    );
}

export default App;