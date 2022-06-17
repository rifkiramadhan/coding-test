import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <p className="logo-app">News Apps</p>
        </div>
    )
}

export default Header;
