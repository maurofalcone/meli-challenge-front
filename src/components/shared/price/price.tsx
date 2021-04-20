import React from 'react';
import { fillDecimalPlaces, getFontSize, getInt } from './helpers/data-format';
import css from './price.module.scss';
import { PriceProps } from './types';

const Price: React.FC<PriceProps> = ({ decimals = 2, value, variant = 'none', prefix, size }) => {
    const fontSizeStyle = {
        fontSize: getFontSize(size),
    };
    if (variant === 'none') {
        return <div style={fontSizeStyle}><span className={css.prefix}>{prefix}</span>{value.toFixed(decimals)}</div>
    } else {
        return (
            <div style={fontSizeStyle} className={css.price}>
                <span className={css.prefix}>{prefix}</span>
                <div>{getInt(value)}</div>
                <div className={css.decimals}>{fillDecimalPlaces(value)}</div>
            </div>
        );
    }
}

export default Price;