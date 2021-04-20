import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../helpers/data-format';
import { getErrorProductDetails, getIsFetchingProductDetails, getProductDetails } from '../../../redux/modules/products/selectors';
import { getProductDetail } from '../../../redux/modules/products/thunks';
import Button from '../../shared/button';
import MessageOverlay from '../../shared/message-overlay';
import Price from '../../shared/price/price';
import css from './product-details.module.scss';

const ProductDetails: React.FC = () => {
    const isFetching = useSelector(getIsFetchingProductDetails);
    const error = useSelector(getErrorProductDetails);
    const productDetails = useSelector(getProductDetails);
    const urlParams = useParams<{ id: string }>();
    let dispatch = useDispatch();

    useEffect(() => {
        if (urlParams.id) {
            dispatch(getProductDetail(urlParams.id));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isFetching || error) {
        return <MessageOverlay message={error || 'Cargando...'} />
    }
    if (!productDetails) {
        return <MessageOverlay message={'No pudimos encontrar detalles del producto que estabas buscando.'} />
    }

    return (
        <div className={css.container}>
            <div className={css.column}>
                <div className={css.imageContainer}>
                    <img
                        alt="Product"
                        src={productDetails.item.picture}
                    />
                </div>
                <div className={css.description}>
                    <h3>Descripción del Producto</h3>
                    <div className={css.content}>
                        {productDetails.item.description}
                    </div>
                </div>
            </div>
            <div className={`${css.column} ${css.secondColumn}`}>
                <div className={`${css.column} ${css.priceContainer}`}>
                    <h6>{`${capitalizeFirstLetter(productDetails.item.condition)} - ${productDetails.item.sold_quantity} vendidos`}</h6>
                    <h2 className={css.name}>
                        {productDetails.item.title}
                    </h2>
                    <br />
                    <Price
                        size="large"
                        prefix={productDetails.item.price.currency}
                        value={productDetails.item.price.amount}
                        variant="superIndex"
                        decimals={productDetails.item.price.decimals}
                    />
                </div>
                <div className={css.column}>
                    <br />
                    <br />
                    <br />
                    <Button onClick={() => { }} label="Comprar" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;