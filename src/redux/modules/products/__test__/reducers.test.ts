import { store } from '../../../store';
import { getProductsFulfilled, getProductsPending, getProductsRejected } from '../actions';

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

describe('should fetch products', () => {
    beforeAll(() => {
        store.dispatch(getProductsPending());
    }, 200);
    test('should be loading', () => {
        expect(store.getState().products.products.isFetching).toBe(true);
    });
});

describe('should return products list', () => {
    beforeAll(() => {
        store.dispatch(getProductsFulfilled(productList));
    }, 200);
    test('should have an item', () => {
        expect(store.getState().products.products.data).toHaveLength(1);
    });
});

describe('should save error', () => {
    beforeAll(() => {
        store.dispatch(getProductsRejected('Error'));
    }, 200);
    test('should contain Error', () => {
        expect(store.getState().products.products.error).toContain('Error');
    });
});
