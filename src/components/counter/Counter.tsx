import React, { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import s from './Counter.module.css'
import { CounterBoard } from './counterBoard/CounterBoard';

type CounterPropsType = {
    count: number
    startValue: number
    maxValue: number
    incrementCounter: () => void
    resetCounter: (startValue: number) => void
}

export const Counter = ({count, startValue, maxValue, incrementCounter, resetCounter}: CounterPropsType) => {

    const incrementCounterHandler = () => {
        if (startValue !== null && maxValue !== null && count < maxValue) {
            incrementCounter()
        }
    } 

    const resetCounterHandler = () => {
        if (startValue >= 0) {
            resetCounter(startValue)
        }
    }

    const incBtnDisabled = count === maxValue
    const resetBtnDisabled = count === startValue
    
    return (
        <div className={s.counter}>
            <CounterBoard
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