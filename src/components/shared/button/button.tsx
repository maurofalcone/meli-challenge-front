import React from 'react';
import css from './button.module.scss';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ onClick, label }) =>
    <button className={css.button} onClick={onClick}>
        {label}
    </button>

export default Button;