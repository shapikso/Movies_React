import React, {Component} from 'react';
import './main.scss';
import logo from '../../Bubble-logo.svg';
import {Link} from "react-router-dom";

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
                                <Link to="/sing-up">
                                    <img className="header__logo-image" src={logo} alt="Logo"/>
                                </Link>
                            </div>
                            <div className="header__links">
                                <div className="basic-link header__links-item">
                                    <Link to="/sing-up">sing up</Link>
                                    <Link to="/movie/:id">  movie page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default MainLayout;
