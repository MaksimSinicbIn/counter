import s from './CombinedCounter.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from 'app/store';
import { CounterType } from 'app/counterReducer';
import { Settings } from 'components/settings/Settings';
import { Counter } from 'components/counter/Counter';

export const counterMessages = {
    confirm: 'Press \'Confirm\' to continue',
    error: 'Incorrect value!'
} as const

export const CombinedCounter = () => {

    const [error, setError] = useState<string>('')

    const counter = useSelector<AppRootStateType, CounterType>(state => state.counter)

    return (
        <div className={s.fullCounter}>
            <Settings
                setError={setError}
                startValue={counter.startValue}
                maxValue={counter.maxValue}
            />
            <Counter
                error={error}
                currentValue={counter.currentValue}
                startValue={counter.startValue}
                maxValue={counter.maxValue}
            />
        </div>
    );
};