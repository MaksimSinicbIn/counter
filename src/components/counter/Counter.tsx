import React, { useCallback } from 'react';
import { Button } from '../button/Button';
import s from './Counter.module.css'
import { CounterBoard } from './counterBoard/CounterBoard';
import { useDispatch } from 'react-redux';
import { incrementCounterAC, resetCounterAC } from '../redux/counterReducer';

type CounterPropsType = {
    currentValue: number
    startValue: number
    maxValue: number
    error: string
}

export const Counter = ({currentValue, startValue, maxValue, error}: CounterPropsType) => {

    const dispatch = useDispatch()

    const incrementCounter = useCallback(() => {
        if (currentValue < maxValue) {
            dispatch(incrementCounterAC())
        }
    }, [currentValue, maxValue] )

    const resetCounter = () => {
        dispatch(resetCounterAC())
    }

    const incBtnDisabled = currentValue === maxValue || !!error
    const resetBtnDisabled = currentValue === startValue || !!error

    return (
        <div className={s.counter}>
            <CounterBoard
                error={error}
                currentValue={currentValue}
                maxValue={maxValue}
            />
            <div className={s.buttonSection}>
                <Button
                    bgColor='#3ae0a9'
                    title={'Increment'}
                    onClick={incrementCounter}
                    disabled={incBtnDisabled}
                />
                <Button
                    title={'Reset'}
                    onClick={resetCounter}
                    disabled={resetBtnDisabled}
                />
            </div>
        </div>
    );
};