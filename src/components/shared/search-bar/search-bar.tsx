import React, { useEffect } from 'react';
import styles from './search-bar.module.scss';
import searchIcon from '../../../images/ic-search.png';
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ onChange, onClick, value }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key.toUpperCase() === "ENTER") {
            onClick();
        }
    }

    return (
        <div className={styles.container}>
            <input value={value} onChange={onChange} placeholder="Nunca dejes de buscar" />
            <button onClick={onClick}>
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    )
}

export default SearchBar;