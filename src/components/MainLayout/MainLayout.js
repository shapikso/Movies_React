import React from 'react';
import './main.scss';
import Logo from './Logo/Logo';
import {Link} from "react-router-dom";
import Button from '../common/Button/Button';

const MainLayout = (props) => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="header__container">
                        <div className="header__logo">
                            <Link to="/movies">
                                <Logo/>
                            </Link>
                        </div>
                        <div className="header__links">
                            <div className="basic-link header__links-item">
                                <Link to="/sing-up">
                                    <Button className="button--link" contentKey="Sing Up"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">{props.children}</main>
        </div>
    );
};

export default MainLayout;