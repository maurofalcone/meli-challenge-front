import { action } from 'typesafe-actions';
import {
  IAPIProductDetailResponse,
  IProduct,
  ProductsActionConsts,
} from './types';

export const saveSearchQuery = (data: string) => action(
  ProductsActionConsts.SaveSearchQuery,
  data,
);

export const getProductsFulfilled = (data: IProduct[]) => action(
  ProductsActionConsts.GetProductsFulfilled,
  data,
);

export const getProductsRejected = (error: string) => action(
  ProductsActionConsts.GetProductsRejected,
  error,
);

export const getProductsPending = () => action(
  ProductsActionConsts.GetProductsPending,
);

export const getProductDetailsFulfilled = (data: IAPIProductDetailResponse) => action(
  ProductsActionConsts.GetProductDetailsFulfilled,
  data,
);

export const getProductDetailsRejected = (error: string) => action(
  ProductsActionConsts.GetProductDetailsRejected,
  error,
);

export const getProductDetailsPending = () => action(
  ProductsActionConsts.GetProductDetailsPending,
);