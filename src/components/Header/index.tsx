import React from 'react';
import { Link } from 'react-router-dom';
import TMDBLogo from '../../images/tmdb_logo.svg';

import {Wrapper, Content, TMDBLogoImg} from './Header.styles'

export type HeaderProps = {}

export default function Header({}: HeaderProps) {
    return (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Movies</span>
            </Link>
            <a href="https://www.themoviedb.org/">
                <TMDBLogoImg src={TMDBLogo}/>
            </a>
        </Content>
    </Wrapper>
    );
}
