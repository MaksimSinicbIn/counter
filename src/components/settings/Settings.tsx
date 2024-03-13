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
    setLimitValues: () => void
    // setCount: (startValue: number, maxValue: number) => void
};

export const Settings = ({startValue, maxValue, addStartValue, addMaxValue, setLimitValues}: SettingsPropsType) => {

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addMaxValue(Number(e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addStartValue(Number(e.currentTarget.value))
    }

    const onLimitSetValueHandler = () => {
        setLimitValues()
    }

    return (
        <div className={s.settings}>
            <div className={s.settingsBoard}>
                <LimitBoard
                    title={'Max Value:'}
                    value={maxValue}
                    onChange={onMaxValueChangeHandler}/>
                <LimitBoard
                    title={'Start Value:'}
                    value={startValue}
                    onChange={onStartValueChangeHandler}/>
            </div>
            <div className={s.buttonSection}>
                <Button bgColor='#3ae0a9' title={'Set'} onClick={onLimitSetValueHandler}/>
            </div>
        </div>
    );
};