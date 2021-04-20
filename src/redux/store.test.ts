import { initialState as products } from './modules/products/reducers';
import { DVPState, store } from './store';

describe('redux store', () =>
    it('should set the supplied initial state', () => {

        const initialState: DVPState = {
            products,
        };

        expect(store.getState()).toEqual(initialState);
    }),
);
