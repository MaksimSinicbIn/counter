import * as React from 'react';
import s from './CounterBoard.module.css'
import { counterMessages } from '../../CombinedCounter';


type CounterBoardPropsType = {
    currentValue: number
    maxValue: number
    error: string
};

export const CounterBoard = ({currentValue, error, maxValue}: CounterBoardPropsType) => {

    const finalClassName = error.includes(counterMessages.confirm) ? s.defaultMessage : s.errorMessage

    return (
        <div className={s.scoreboard}>
            <div className={currentValue === maxValue ? s.countWarning : ''}>
                { !!error ? <span className={finalClassName}>{error}</span> : currentValue}
            </div>
        </div>
    );
};