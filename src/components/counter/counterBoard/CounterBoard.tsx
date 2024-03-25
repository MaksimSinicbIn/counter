import * as React from 'react';
import s from './CounterBoard.module.css'
import { useState } from 'react';

type CounterBoardPropsType = {
    count: number
    maxValue: number
    startValue: number
};

export const CounterBoard = ({count, startValue, maxValue}: CounterBoardPropsType) => {
    
    return (
        <div className={s.scoreboard}>
                <div className={count === maxValue ? s.countWarning : ''}>
                    {/* {startValue === 0 || maxValue === 0 ? 'Both start and max values must be set' : startValue < 0
                        ? 'Start value must be non-negative' : maxValue <= startValue 
                            ? 'Max value must be greater than start value' : count} */}
                    {count}
                </div>
        </div>
    );
};