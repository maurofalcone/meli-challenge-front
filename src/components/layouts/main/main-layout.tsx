import React, { useState } from 'react';
import css from './main-layout.module.scss';
import Header from '../../shared/header';
import { useDispatch } from 'react-redux';
import { saveSearchQuery } from '../../../redux/modules/products/actions';
import { RouteComponentProps, useHistory } from 'react-router';

interface MainLayoutProps {
    children: JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [inputValue, saveValue] = useState<string>('');
    const history = useHistory<RouteComponentProps['history']>();
    let dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        saveValue(e.target.value);
    }

    const handleClick = () => {
        if (inputValue) {
            dispatch(saveSearchQuery(inputValue));
            saveValue('');
            const url = `/items/search=${encodeURI(inputValue)}`;
            history.push(url);
        }
    }

    return (
        <div className={css.container}>
            <div className={css.headerWrapper}>
                <Header value={inputValue} onChange={handleChange} onClick={handleClick} />
            </div>
            <div className={css.content}>
                <div className={css.productListContainer}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout;