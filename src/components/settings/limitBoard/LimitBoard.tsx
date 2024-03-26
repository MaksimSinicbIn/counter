import * as React from 'react';
import { ChangeEvent } from 'react';
import s from './LimitBoard.module.css'

type LimitBoardPropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
}

export const LimitBoard = ({title, value, inputError, onChange}: LimitBoardPropsType) => {
    return (
        <form className={s.form}>
            <label>{title}</label>
            <input 
                className={inputError ? `${s.inputError} ${s.input}` : s.input}
                value={value}
                type='number'
                onChange={onChange}
            />
        </form>
    );
};