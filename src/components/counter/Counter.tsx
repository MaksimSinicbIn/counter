import React from 'react';
import { Button } from '../button/Button';
import s from './Counter.module.css'
import { CounterBoard } from './counterBoard/CounterBoard';

type CounterPropsType = {
    count: number
    startValue: number
    maxValue: number
    error: string
    setCount: (count: number) => void
}

export const Counter = ({count, startValue, maxValue, error, setCount}: CounterPropsType) => {

    const incrementCounterHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    } 

    const resetCounterHandler = () => {
            setCount(startValue)
    }

    const incBtnDisabled = count === maxValue || !!error
    const resetBtnDisabled = count === startValue || !!error
    
    return (
        <div className={s.counter}>
            <CounterBoard
                error={error}
                count={count}
                maxValue={maxValue}
            />
            <div className={s.buttonSection}>
                <Button
                    bgColor='#3ae0a9'
                    title={'Increment'}
                    onClick={incrementCounterHandler}
                    disabled={incBtnDisabled}
                />
                <Button
                    title={'Reset'}
                    onClick={resetCounterHandler}
                    disabled={resetBtnDisabled}
                />
            </div>
        </div>
    );
};