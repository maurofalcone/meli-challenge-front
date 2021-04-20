import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory, useParams } from 'react-router-dom';
import Product, { ProductProps } from '../../shared/product';
import css from './product-list.module.scss';
import { IProduct } from '../../../redux/modules/products/types';
import { searchProduct } from '../../../redux/modules/products/thunks';
import MessageOverlay from '../../shared/message-overlay';
import { getErrorProducts, getIsFetchingProducts, getProducts, getSearchQuery } from '../../../redux/modules/products/selectors';

const handleClick = (e: React.MouseEventHandler<HTMLImageElement>, history: RouteComponentProps['history'], id: ProductProps['id']): void => {
    history.push(`/product-details/${id}`);
}

const renderProducts = (list: IProduct[], history: RouteComponentProps['history']): JSX.Element | JSX.Element[] => {
    if (!list.length) {
        return <MessageOverlay message="No pudimos encontrar el producto que estabas buscando" />
    }
    return list.map((product: IProduct, index: number) => {
        const isLastChild = (list.length - 1) === index;
        const lastChildStyle = isLastChild ? { borderBottom: 'none' } : undefined;
        return (
            <Product
                id={product.id}
                style={lastChildStyle}
                key={product.id}
                name={product.title}
                price={product.price.amount}
                decimals={product.price.decimals}
                description={product.description}
                location={product.location}
                url={product.picture}
                onClick={(e: React.MouseEventHandler<HTMLImageElement>) => handleClick(e, history, product.id)}
                imgLoading="lazy"
                prefix={product.price.currency}
                size="normal"
            />
        )
    })
}

const ProductList: React.FC = () => {
    const list = useSelector(getProducts);
    const isFetching = useSelector(getIsFetchingProducts);
    const searchQuery = useSelector(getSearchQuery);
    const error = useSelector(getErrorProducts);
    const history = useHistory<RouteComponentProps['history']>();
    let dispatch = useDispatch();
    let params = useParams<{ id: string }>();

    useEffect(() => {
        if (!searchQuery && !params.id) return;
        let q = '';
        if (params && params.id) {
            q = params.id;
        } if (searchQuery) {
            q = searchQuery;
        }
        dispatch(searchProduct(q));
    }, [dispatch, searchQuery, params]);

    return (
        <div className={css.container}>
            {!isFetching && !!!error ? renderProducts(list, history) : <MessageOverlay message={error || 'Cargando...'} />}
        </div>
    )
}

export default ProductList;