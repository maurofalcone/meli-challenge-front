import { DVPState } from '../../../store';
import { initialState as productsInitialState } from '../reducers';
import { getProducts } from '../selectors';

const productList = [{
    title: 'Iphone 11',
    price: {
        amount: 130000,
        decimals: 2,
        currency: 'ARS',
    },
    condition: 'New',
    id: 'MLA3218932',
    free_shipping: true,
    picture: 'https://mypicture.com',
    description: 'Apple smartphone',
    location: 'Capital Federal',
}];

describe('User Selectors', () => {
    const state: DVPState = {
        products: {
            ...productsInitialState,
            products: {
                ...productsInitialState.products,
                data: productList,
            },
        }
    };

    test('should get products list', () => {
        expect(getProducts(state)).toEqual(productList);
    });
});
