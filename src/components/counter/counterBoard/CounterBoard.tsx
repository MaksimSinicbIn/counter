import * as React from 'react';
import s from './CounterBoard.module.css'
import { counterMessages } from '../../../App';

type CounterBoardPropsType = {
    count: number
    maxValue: number
    error: string
};

export const CounterBoard = ({count, error, maxValue}: CounterBoardPropsType) => {

    const finalClassName = error.includes(counterMessages.confirm) ? s.defaultMessage : s.errorMessage
    
    return (
        <div className={s.scoreboard}>
            <div className={count === maxValue ? s.countWarning : ''}>
                { !!error ? <span className={finalClassName}>{error}</span> : count}
            </div>
        </div>
    );
};