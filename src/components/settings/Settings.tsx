import * as React from 'react';
import { Button } from '../button/Button';
import s from './Settings.module.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { LimitBoard } from './limitBoard/LimitBoard';
import { useDispatch } from 'react-redux';
import { setSettingsAC } from '../redux/counterReducer';
import { counterMessages } from '../CombinedCounter';

type SettingsProps = {
    startValue: number
    maxValue: number
    setError: (error: string) => void
};

export const Settings = ({
    startValue,
    maxValue,
    setError }: SettingsProps) => {

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);

    const dispatch = useDispatch()

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
        } else if (newStartValue !== startValue || newMaxValue !== maxValue) {
            setError(counterMessages.confirm);
        } else {
            setError('');
        }
    }, [newStartValue, newMaxValue, newStartValueError, newMaxValueError, startValue, maxValue, isError]);

    const startCounter = () => {
        if (!isError) {
            dispatch(setSettingsAC(newMaxValue, newStartValue))
        }
    };

    return (
        <div className={s.settings}>
            <div className={s.settingsBoard}>
                <LimitBoard
                    MaxValueTitle={'Max Value: '}
                    StartValueTitle={'Start Value: '}
                    newMaxValue={newMaxValue}
                    newStartValue={newStartValue}
                    newMaxValueInputError={newMaxValueError}
                    newStartValueInputError={newStartValueError}
                    onMaxValueChange={onMaxValueChangeHandler}
                    onStartValueChange={onStartValueChangeHandler}
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