import React from 'react';
import Aside from './components/Aside/Aside';
import View from './components/View/View';
import ErrorButton from './components/View/components/ErrorButton';
import './App.css';

function AccountSetup() {
    return (
        <div className="Account-Setup">
            <Aside />
            <div className="Display-plus">
                <View />
                <ErrorButton />
            </div>
        </div>
    );
}

export default AccountSetup;
