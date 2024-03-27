import * as React from 'react';
import { Button } from '../button/Button';
import s from './Settings.module.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { LimitBoard } from './limitBoard/LimitBoard';
import { counterMessages } from '../../App';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    addMaxValue: (maxValue: number) => void
    addStartValue: (startValue: number) => void
    setCount: (value: number) => void
    setError: (error: string) => void
};

export const Settings = ({
    startValue,
    maxValue,
    addMaxValue,
    addStartValue,
    setCount,
    setError}: SettingsPropsType) => {

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(Number(e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(Number(e.currentTarget.value))
    }

    const newStartValueError = newStartValue < 0 || newStartValue >= newMaxValue
    const newMaxValueError = newMaxValue < 0 || newMaxValue <= newStartValue
    const isError = newStartValueError || newMaxValueError
    
    useEffect(() => {
        if (isError) {
            setError(counterMessages.error); 
        } else if ( newStartValue !== startValue || newMaxValue !== maxValue){
            setError(counterMessages.confirm);
        } else {
            setError('');
        }
    }, [newStartValue, newMaxValue, newStartValueError, newMaxValueError, setError, startValue, maxValue, isError]);

    const startCounter = () => {
        if (!isError) {
            addStartValue(newStartValue)
            addMaxValue(newMaxValue);
            setCount(newStartValue);
        }
    };

    return (
        <div className={s.settings}>
            <div className={s.settingsBoard}>
                <LimitBoard
                    title={'Max Value:'}
                    value={newMaxValue}
                    onChange={onMaxValueChangeHandler}
                    inputError={newMaxValueError}
                />
                <LimitBoard
                    title={'Start Value:'}
                    value={newStartValue}
                    onChange={onStartValueChangeHandler}
                    inputError={newStartValueError}
                />
            </div>
            <div className={s.buttonSection}>
                <Button
                    bgColor='#3ae0a9'
                    title={'Confirm'}
                    onClick={startCounter}
                    disabled={isError}
                />
            </div>
        </div>
    );
};