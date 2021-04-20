import { DVPState } from '../../../store';

export const getProducts = (state: DVPState) => state.products.products.data;
export const getIsFetchingProducts = (state: DVPState) => state.products.products.isFetching;
export const getErrorProducts = (state: DVPState) => state.products.products.error;

export const getSearchQuery = (state: DVPState) => state.products.searchQuery;

export const getProductDetails = (state: DVPState) => state.products.productDetails.data;
export const getIsFetchingProductDetails = (state: DVPState) => state.products.productDetails.isFetching;
export const getErrorProductDetails = (state: DVPState) => state.products.productDetails.error;
