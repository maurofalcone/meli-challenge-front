import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
    getProductsPending,
    getProductsFulfilled,
    getProductsRejected,
    getProductDetailsPending,
    getProductDetailsFulfilled,
    getProductDetailsRejected,
} from './actions';
import axios from 'axios';
import { IAPIProductDetailResponse, IAPIProductResponse } from './types';
import { BASE_URL, PRODUCT_DETAILS_ENDPOINT, SEARCH_QUERY_ENDPOINT } from '../../../constants';

export const searchProduct = (query: string) => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
    try {
        dispatch(getProductsPending());
        const url = BASE_URL + SEARCH_QUERY_ENDPOINT + query;
        const response = await axios.get<IAPIProductResponse>(url);
        if (!response || response.status !== 200) {
            throw new Error('No pudimos obtener la lista de productos, por favor vuelve a intentarlo.');
        }
        dispatch(getProductsFulfilled(response.data.items));
    } catch (error) {
        dispatch(getProductsRejected(error.message));
    }
};

export const getProductDetail = (id: string) => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
    try {
        dispatch(getProductDetailsPending());
        const url = BASE_URL + PRODUCT_DETAILS_ENDPOINT + id;
        const response = await axios.get<IAPIProductDetailResponse>(url);
        if (!response || response.status !== 200) {
            throw new Error('No pudimos detalles del producto que estas buscando, por favor vuelve a intentarlo.');
        }
        dispatch(getProductDetailsFulfilled(response.data));
    } catch (error) {
        dispatch(getProductDetailsRejected(error.message));
    }
};
