import React from 'react';
import './main.scss';
import Logo from './Logo/Logo';
import {Link, useLocation} from "react-router-dom";
import Button from '../common/Button/Button';
import {getNextRoute} from "../../helpers/route";
import {StButtonLinkWrapper, StContainer, StHeaderContainer, StHeaderLink} from "./styled";

const MainLayout = (props) => {
    const { link, content } = getNextRoute(useLocation().pathname);
    return (
        <>
            <header>
                <StContainer>
                    <StHeaderContainer>
                        <div>
                            <Link to="/movies">
                                <Logo/>
                            </Link>
                        </div>
                        <StHeaderLink>
                            <StButtonLinkWrapper>
                                <Link to={link}>
                                    <Button width="100px" color="transparent" contentKey={content}/>
                                </Link>
                            </StButtonLinkWrapper>
                        </StHeaderLink>
                    </StHeaderContainer>
                </StContainer>
            </header>
            <main className="main">{props.children}</main>
        </>
    );
};

export default MainLayout;