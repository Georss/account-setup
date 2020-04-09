import React from 'react';
import blankProfile from '../blank-profile-picture.png';
import Header from './components/Header';
import Preview from './components/Preview';
import './View.css';

const View = () => (
    <div className="Display">
        <Header
            blankProfile={blankProfile}
        />
        <Preview
            blankProfile={blankProfile}
        />
    </div>
);

export default View;
