import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ProductsActionTypes = ActionType<typeof actions>;

export interface ProductsState {
    readonly products: RequestStatus<IProduct[]>;
    readonly productDetails: RequestStatus<IAPIProductDetailResponse | undefined>;
    readonly searchQuery: string;
}

export enum ProductsActionConsts {
    SaveSearchQuery = '@@products/SaveSearchQuery',
    GetProductsPending = '@@products/ResetPasswordPending',
    GetProductsFulfilled = '@@products/GetProductsFulfilled',
    GetProductsRejected = '@@products/GetProductsRejected',
    GetProductDetailsPending = '@@products/GetProductDetailsPending',
    GetProductDetailsRejected = '@@products/GetProductDetailsRejected',
    GetProductDetailsFulfilled = '@@products/GetProductDetailsFulfilled',
}

interface ISeller {
    name: string;
    lastname: string;
}

export interface IAPIProductResponse {
    items: IProduct[];
}

interface IProductDetail extends IProduct {
    sold_quantity: number;
}

export interface IAPIProductDetailResponse {
    author: ISeller,
    categories: string[];
    item: IProductDetail;
}

export interface IProduct {
    id: string;
    description: string;
    location: string;
    condition: string;
    free_shipping: boolean;
    picture: string;
    price: {
        amount: number;
        currency: string;
        decimals: number;
    };
    title: string;
}

export interface RequestStatus<T> {
    isFetching: boolean;
    error: string;
    data: T;
}