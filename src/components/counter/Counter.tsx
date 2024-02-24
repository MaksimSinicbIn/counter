import React, { useState } from 'react';
import { Button } from '../button/Button';

export const Counter = () => {
    let [count, setCount] = useState(0)

    const onIncrementClickHandler = () => {
        setCount(count + 1)
    }

    const onResetClickHandler = () => {
        setCount(0)
    }

    const isIncrementBtnDisabled = count === 5;
    const isResetBtnDisabled = count === 0
    
    return (
        <div className={'counter'}>
            <div className={count === 5 ? 'count-warning' : 'scoreboard'}>
                {count}
            </div>
            
            <div className={'button-section'}>
                <Button className={'inc-button'}
                    title={count === 0 ? 'Press on me, please!' : 'Oh yeah, master, more!'}
                    onClick={onIncrementClickHandler}
                    disabled={isIncrementBtnDisabled}
                />
                <Button className={'reset-button'}
                    title={'Reset'}
                    onClick={onResetClickHandler}
                    disabled={isResetBtnDisabled}
                />
            </div>
            {count === 5 ? <div className={'warning'}>Hey, master! 5 max value!!!</div> : ''}
        </div>
    );
};