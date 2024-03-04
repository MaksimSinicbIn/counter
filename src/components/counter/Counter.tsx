import React, { useState } from 'react';
import { Button } from '../button/Button';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    incrementCounter: () => void
    resetCounter: () => void
}

export const Counter = ({count, incrementCounter, resetCounter}: CounterPropsType) => {
    
    const incrementCounterHandler = () => {
        incrementCounter()
    }

    const resetCounterHandler = () => {
        resetCounter()
    }
    
    const maxValue = count === 5;
    const minValue = count === 0;
    const isIncrementBtnDisabled = maxValue
    const isResetBtnDisabled = minValue
    
    return (
        <div className={s.counter}>
            <div className={s.scoreboard}>
                <div className={maxValue ? s.countWarning : ''}>
                    {count}
                </div>
            </div>
            
            <div className={s.buttonSection}>
                <Button className={`${s.button} ${s.incButton}`} 
                    title={minValue ? 'Press on me, please!' : 'Oh yeah, master, more!'}
                    onClick={incrementCounterHandler}
                    disabled={isIncrementBtnDisabled}
                />
                <Button className={`${s.button} ${s.resetButton}`} 
                    title={'Reset'}
                    onClick={resetCounterHandler}
                    disabled={isResetBtnDisabled}
                />
            </div>
        </div>
    );
};