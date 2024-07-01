import * as React from 'react';
import s from './CounterBoard.module.css';
import { counterMessages } from '../../CombinedCounter';
import bodyaga from '../../../assets/audio/bodyaga.ogg'
import chtoProishodit from '../../../assets/audio/chto_proishodit.ogg'
import nedorazumenie from '../../../assets/audio/nedorazumenie.ogg'

type CounterBoardProps = {
    currentValue: number
    maxValue: number
    error: string
};

export const CounterBoard = ({ currentValue, error, maxValue }: CounterBoardProps) => {

    const audioWarnings = [bodyaga, chtoProishodit, nedorazumenie]

    function getRandomNumber(min: number, max: number) {
        return Math.trunc(Math.random() * (max - min) + min)
    }

    const randomAudioWarningsIndex = getRandomNumber(0, audioWarnings.length)

    const randomWarning = audioWarnings[randomAudioWarningsIndex]

    const finalClassName = error.includes(counterMessages.confirm) ? s.defaultMessage : s.errorMessage

    return (
        <div className={s.scoreboard}>
            <div className={currentValue === maxValue ? s.countWarning : ''}>
                {!!error ?
                    (
                        <>
                            <span className={finalClassName}>{error}</span>
                            <audio autoPlay src={randomWarning} />
                        </>
                    ) : (currentValue)}
            </div>
        </div>
    );
};