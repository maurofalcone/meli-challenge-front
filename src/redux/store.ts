// tslint:disable-next-line: no-submodule-imports
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { productsReducer } from './modules/products/reducers';

// Types
import { ProductsActionTypes, ProductsState } from './modules/products/types';

export type RootAction = ProductsActionTypes;

export interface DVPState {
    products: ProductsState;
}

// Create Redux Store
export function configureStore() {

    const rootReducers = combineReducers<DVPState>({
        products: productsReducer,
    });

    const middleware = [
        thunk,
    ];

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancers = composeEnhancers(applyMiddleware(...middleware));

    const reduxStore = createStore(
        rootReducers,
        enhancers,
    );

    return reduxStore;
}

export const store = configureStore();
