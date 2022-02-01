import React from 'react';
import './main.scss';
import Logo from './Logo/Logo';
import {Link, useLocation} from "react-router-dom";
import Button from '../common/Button/Button';
import {getNextRoute} from "../../helpers/route";

const MainLayout = (props) => {
    const { link, content } = getNextRoute(useLocation().pathname);
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
                                <Link to={link}>
                                    <Button className="button--link" contentKey={content}/>
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