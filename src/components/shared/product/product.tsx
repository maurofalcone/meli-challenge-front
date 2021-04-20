import React from 'react';
import Price from '../price';
import css from './product.module.scss';
import { ProductProps } from './types';

const Product: React.FC<ProductProps> = ({ decimals = 2, location, name, price, url, style, imgLoading, onClick, prefix, size }) => {
    return (
        <div className={css.row}>
            <div className={`${css.column} ${css.imageContainer}`}>
                <img
                    alt="Product"
                    loading={imgLoading}
                    src={url}
                    onClick={onClick}
                />
            </div>
            <div className={`${css.column} ${css.priceContainer}`}>
                <Price size={size} prefix={prefix} variant="none" value={price} decimals={decimals} />
                <div className={css.name}>{name}</div>
            </div>
            <div className={`${css.column} ${css.locationContainer}`}>
                <div>{location}</div>
            </div>
            <div className={css.separator} style={style}>
            </div>
        </div>
    )
}

export default Product;