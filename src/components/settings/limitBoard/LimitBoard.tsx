import * as React from 'react';
import { ChangeEvent } from 'react';
import s from './LimitBoard.module.css'
import { Input } from '../../input/Input';

type LimitBoardProps = {
    MaxValueTitle: string
    StartValueTitle: string
    newMaxValue: number
    newStartValue: number
    newMaxValueInputError: boolean
    newStartValueInputError: boolean
    onMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    onStartValueChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LimitBoard = ({
    MaxValueTitle,
    StartValueTitle,
    newMaxValue,
    newStartValue,
    newMaxValueInputError,
    newStartValueInputError,
    onMaxValueChange,
    onStartValueChange }: LimitBoardProps) => {
    return (
        <div className={s.settingsBoard}>
            <Input
                title={MaxValueTitle}
                value={newMaxValue}
                onChange={onMaxValueChange}
                inputError={newMaxValueInputError}
            />
            <Input
                title={StartValueTitle}
                value={newStartValue}
                onChange={onStartValueChange}
                inputError={newStartValueInputError}
            />
        </div>
    );
};