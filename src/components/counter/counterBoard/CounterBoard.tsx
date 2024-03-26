import * as React from 'react';
import s from './CounterBoard.module.css'
import { useEffect, useState } from 'react';

type CounterBoardPropsType = {
    count: number
    maxValue: number
    startValue: number
    error: string
    errorStatus: boolean
};

export const CounterBoard = ({count, error, errorStatus, maxValue, startValue}: CounterBoardPropsType) => {

    return (
        <div className={s.scoreboard}>
            <div className={count === maxValue ? s.countWarning : ''}>
                { errorStatus ? error : count}
            </div>
        </div>
    );
};