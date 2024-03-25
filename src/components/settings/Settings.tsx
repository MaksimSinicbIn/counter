import * as React from 'react';
import { Button } from '../button/Button';
import s from './Settings.module.css'
import { ChangeEvent, useState } from 'react';
import { LimitBoard } from './limitBoard/LimitBoard';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    addStartValue: (startValue: number) => void
    addMaxValue: (maxValue: number) => void
    setCount: (value: number) => void
};

export const Settings = ({startValue, maxValue, addStartValue, addMaxValue, setCount}: SettingsPropsType) => {
    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);
    const [inputError, setInputError] = useState<string | null>(null)
    const [inputErrorStatus, setInputErrorStatus] = useState(false)

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxValue(Number(e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartValue(Number(e.currentTarget.value))
    }

    const validate = () => {
        if (newStartValue === null || newMaxValue === null) {
            setInputError('Both start and max values must be set');
            setInputErrorStatus(true);
            return false
        }
        if (newStartValue < 0) {
            setInputError('Start value must be non-negative');
            setInputErrorStatus(true);
            return false
        }
        if (newMaxValue <= newStartValue) {
            setInputError('Max value must be greater than start value');
            setInputErrorStatus(true);
            return false
        }
        setInputError(null);
        setInputErrorStatus(false);
        return true
    };

    // const startCounter = () => {
    //     if (newStartValue === null || newMaxValue === null) {
    //         setInputError('Both start and max values must be set');
    //         setInputErrorStatus(true);
    //     }
    //     if (newStartValue < 0 || newMaxValue < 0) {
    //         setInputError('Start value must be non-negative');
    //         setInputErrorStatus(true);
    //     }
    //     if (newMaxValue <= newStartValue) {
    //         setInputError('Max value must be greater than start value');
    //         setInputErrorStatus(true);
    //     } else {
    //         setInputError(null);
    //         setInputErrorStatus(false);
    //         addStartValue(newStartValue);
    //         addMaxValue(newMaxValue);
    //         setCount(newStartValue);
    //     }
    // }

    const startCounter = () => {
        if (validate()) {
            addStartValue(newStartValue);
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
                    className={inputErrorStatus ? s.inputError : ''}
                    title={'Max Value:'}
                    value={newMaxValue}
                    onChange={onMaxValueChangeHandler}/>
                <LimitBoard
                    className={inputErrorStatus ? s.inputError : ''}
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