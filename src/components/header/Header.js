import React from 'react';
import TwitterLogo from '../../assets/img/twitter-logo.png';

import './Headers.scss';

export default function Header() {
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Meli Tweets"/>
            <h1>Meli Tweets</h1>
        </div>
    )
}