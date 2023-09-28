import React from 'react';
import logo from '../../assets/argentBankLogo.png';

import './header.scss';

export default function Header(){
    return(
        <>
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div className="signinContainer">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <a className="main-nav-item" href="./sign-in.html">
                    Sign In
                    </a>
                </div>
            </nav>
        </header>
        </>
    )
}