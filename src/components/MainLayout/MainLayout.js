import React, {Component} from 'react';
import './main.scss';
import Logo from './Logo/Logo';
import {Link} from "react-router-dom";
import Button from '../common/Button/Button';

class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                        <Button className="button--link">Sing up</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="main">{this.props.children}</main>
            </div>
        );
    }
}

export default MainLayout;