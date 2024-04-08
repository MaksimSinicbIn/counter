import React from 'react';
import './App.css';
import { FullCounter } from './components/FullCounter';

function AppWithoutLocalStorage() {
    return (
        <div className='App'>
            <FullCounter />
        </div>
    );
};

export default AppWithoutLocalStorage;