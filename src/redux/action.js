import * as types from "./actiontypes";

export const loadproductStart = () => ({
  type: types.LOAD_PRODUCT_START,
});

export const loadproductSuccess = (products) => ({
  type: types.LOAD_PRODUCT_SUCCESS,
  payload: products,
});

export const loadproductError = (error) => ({
  type: types.LOAD_PRODUCT_ERROR,
  payload: error,
});

export const addtocart = (product) => ({
  type: types.ADD_T0_CART,
  payload: product,
});

export const addtocartstart = (product) => ({
  type: types.ADD_TO_CART_START,
  payload: product,
});

export const deletetocart = (product) => ({
  type: types.DELETE_TO_CART,
  payload: product,
});

export const deletetocartstart = (product) => ({
  type: types.DELETE_TO_CART_START,
  payload: product,
});

export const decrementcartquality = (product) => ({
  type: types.DECREMENT_CART_QUANTITY,
  payload: product,
});

export const decrementcartqualitystart = (product) => ({
  type: types.DECREMENT_CART_QUANTITY_START,
  payload: product,
});
export const clearCart = () => ({
  type: types.CLEAR_TO_CART,
});

export const clearCartStart = () => ({
  type: types.CLEAR_TO_CART_START,
});

export const getTotals = () => ({
  type: types.GET_TOTAL_CART,
});

export const getTotalStart = () => ({
  type: types.GET_TOTAL_CART_START,
});

export const occuredError = () => ({
  type: types.OCCURED_ERROR,
});
