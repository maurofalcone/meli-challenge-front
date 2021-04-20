import { Reducer } from 'redux';
import { ProductsActionConsts, ProductsActionTypes, ProductsState } from './types';

export const initialState: ProductsState = {
    products: {
        data: [],
        isFetching: false,
        error: '',
    },
    productDetails: {
        data: undefined,
        isFetching: false,
        error: '',
    },
    searchQuery: '',
};

const reducer: Reducer<ProductsState, ProductsActionTypes> = (
    state = initialState, action): ProductsState => {
    switch (action.type) {

        case ProductsActionConsts.SaveSearchQuery: {
            return {
                ...state,
                searchQuery: action.payload,
            }
        }

        case ProductsActionConsts.GetProductsPending: {
            return {
                ...state,
                products: {
                    ...initialState.products,
                    isFetching: true,
                },
            }
        }

        case ProductsActionConsts.GetProductsFulfilled: {
            return {
                ...state,
                products: {
                    ...initialState.products,
                    data: action.payload,
                },
            }
        }

        case ProductsActionConsts.GetProductsRejected: {
            return {
                ...state,
                products: {
                    ...initialState.products,
                    error: action.payload,
                },
            }
        }

        case ProductsActionConsts.GetProductDetailsPending: {
            return {
                ...state,
                productDetails: {
                    ...initialState.productDetails,
                    isFetching: true,
                }
            }
        }

        case ProductsActionConsts.GetProductDetailsFulfilled: {
            return {
                ...state,
                productDetails: {
                    ...initialState.productDetails,
                    data: action.payload,
                }
            }
        }

        case ProductsActionConsts.GetProductDetailsRejected: {
            return {
                ...state,
                productDetails: {
                    ...initialState.productDetails,
                    error: action.payload,
                }
            }
        }

        default: {
            return state;
        }
    }
};

export { reducer as productsReducer };
