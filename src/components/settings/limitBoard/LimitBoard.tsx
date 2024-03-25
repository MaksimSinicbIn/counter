import * as React from 'react';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './LimitBoard.module.css'

type LimitBoardPropsType = {
    title: string
    value: number
    className?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LimitBoard = ({title, value, className, onChange}: LimitBoardPropsType) => {
    return (
        <form className={s.form}>
            <label>{title}</label>
            <input 
                className={className}
                value={value}
                type='number'
                onChange={onChange}
            />
        </form>
    );
};