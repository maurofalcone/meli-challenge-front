import React from 'react';
import SearchBar from '../search-bar';
import logo from '../../../images/logo-ML.png';
import css from './header.module.scss';
import { HeaderProps } from './types';
import { Link } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ onChange, onClick, value }) => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <Link to='/'>
                    <img className={css.logo} src={logo} alt="ML" />
                </Link>
                <SearchBar
                    onClick={onClick}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </div>
    )
}

export default Header;