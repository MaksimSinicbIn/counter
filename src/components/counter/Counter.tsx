import React, { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import s from './Counter.module.css'
import { CounterBoard } from './counterBoard/CounterBoard';

type CounterPropsType = {
    count: number
    startValue: number
    maxValue: number
    errorStatus: boolean
    error: string
    setCount: (count: number) => void
}

export const Counter = ({count, startValue, maxValue, errorStatus, error, setCount}: CounterPropsType) => {

    const incrementCounterHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    } 

    const resetCounterHandler = () => {
            setCount(startValue)
    }

    const incBtnDisabled = count === maxValue
    const resetBtnDisabled = count === startValue
    
    return (
        <div className={s.counter}>
            <CounterBoard
                errorStatus={errorStatus}
                error={error}
                count={count}
                maxValue={maxValue}
                startValue={startValue}
            />
            <div className={s.buttonSection}>
                <Button
                    bgColor='#3ae0a9'
                    title={'Press on me, please!'}
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