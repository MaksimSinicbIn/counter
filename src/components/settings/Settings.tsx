import * as React from 'react';
import { Button } from '../button/Button';
import s from './Settings.module.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { LimitBoard } from './limitBoard/LimitBoard';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    addMaxValue: (maxValue: number) => void
    addStartValue: (startValue: number) => void
    setCount: (value: number) => void
    setError: (error: string) => void
    setErrorStatus: (status: boolean) => void
    errorStatus: boolean
};

export const Settings = ({
    startValue,
    maxValue,
    errorStatus,
    addMaxValue,
    addStartValue,
    setCount,
    setErrorStatus,
    setError}: SettingsPropsType) => {

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(Number(e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(Number(e.currentTarget.value))
    }

    const newMinValueError = newStartValue < 0 || newStartValue >= newMaxValue
    const newMaxValueError = newMaxValue < 0 || newMaxValue <= newStartValue

    useEffect(() => {
        if (newMinValueError || newMaxValueError) {
            setError('Incorrect value!');
            setErrorStatus(true);
        }
        // } else if (newStartValue !== startValue || newMaxValue !== maxValue) {
        //     setError('Enter values and press \'Set\'');
        //     setErrorStatus(!errorStatus);
        // }
        else {
            setError('');
            setErrorStatus(false);
        }
    }, [newStartValue, newMaxValue, newMinValueError, newMaxValueError, setError, setErrorStatus, startValue, maxValue]);

    // const validate = () => {
    //     if (newMinValueError || newMaxValueError) {
    //         setError('Incorrect value!');
    //         setErrorStatus(true);
    //         return false
    //     } else {
    //         setError('Enter values and press \'Set\'');
    //         setErrorStatus(false);
    //         return true
    //     }
    // };

    const startCounter = () => {
        if (!errorStatus) {
            addStartValue(newStartValue)
            addMaxValue(newMaxValue);
            setCount(newStartValue);
        }
    };



    // const setNewValues = () => {
    //     addStartValue(newStartValue);
    //     addMaxValue(newMaxValue);
    //     if (newStartValue !== null && newMaxValue !== null) {
    //         setCount(newStartValue);
    //     }
    // }

    return (
        <div className={s.settings}>
            <div className={s.settingsBoard}>
                <LimitBoard
                    className={errorStatus ? s.inputError : ''}
                    title={'Max Value:'}
                    value={newMaxValue}
                    onChange={onMaxValueChangeHandler}/>
                <LimitBoard
                    className={errorStatus ? s.inputError : ''}
                    title={'Start Value:'}
                    value={newStartValue}
                    onChange={onStartValueChangeHandler}/>
            </div>
            <div className={s.buttonSection}>
                <Button bgColor='#3ae0a9' title={'Set'} onClick={startCounter}/>
            </div>
        </div>
    );
};