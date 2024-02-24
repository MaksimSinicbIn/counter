import React from 'react';

type ButtonPropsType = {
    title: string
    className?: string
    disabled?: boolean
    onClick: () => void
}

export const Button = ({title, className, disabled, onClick}: ButtonPropsType) => {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}>{title}</button>
    );
};