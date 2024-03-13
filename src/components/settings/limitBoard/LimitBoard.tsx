import * as React from 'react';
import { ChangeEvent } from 'react';
import s from './LimitBoard.module.css'

type LimitBoardPropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const LimitBoard = ({title, value, onChange}: LimitBoardPropsType) => {
    return (
        <form className={s.form}>
            <label>{title}</label>
            <input 
                className={s.input}
                value={value}
                type='number'
                onChange={onChange}
            />
        </form>
    );
};