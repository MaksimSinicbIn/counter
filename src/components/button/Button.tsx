import React, { ButtonHTMLAttributes } from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    bgColor?: string
    disabled?: boolean
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, disabled, bgColor, onClick}: ButtonPropsType) => {
    
    const finalClassName = `
        ${s.button}
            ${bgColor === '#3ae0a9' ? s.incButton : s.resetButton}
    `

    return (
        <button
            className={finalClassName}
            disabled={disabled}
            onClick={onClick}>{title}</button>
    );
};