import {
    takeLatest,
    takeEvery,
    put,
    all,
    fork,
    call,

  } from "redux-saga/effects";
  import {
    loadproductSuccess,loadproductError, occuredError,creatOrdertostart
  } from "../redux/action";
import * as types from "../redux/actiontypes";
import { loadproductapi,creatorderApi } from "./api";


function* onLoadProductStartAsync(){
    console.log("In Load product Start");
    try {
        const response = yield call(loadproductapi);
        console.log("Loaddata response",response);
        console.log(response);
        if(response.status === 200) {
            yield put(loadproductSuccess(response.data));
        }
    } catch (error){
        yield put(loadproductError(error.response.data))
    }
   
}
export function* onLoadProducts(){
    yield takeEvery(types.LOAD_PRODUCT_START,onLoadProductStartAsync)
}

export function* onAddtoCartStartAsync({payload}){
    try {
        yield put({ type: types.ADD_TO_CART_START, payload });
      } catch (error) {
        yield put(occuredError(error.response));
    
}
}
export function* onAddtoCart() {
    yield takeLatest(types.ADD_T0_CART, onAddtoCartStartAsync);
  }

  
export function* onDeleteCartStartAsync({ payload }) {
    try {
      yield put({ type: types.DELETE_TO_CART_START, payload });
    } catch (error) {
      yield put(occuredError(error.response));
    }
  }
  
export function* onDeletetoCart() {
    yield takeLatest(types.DELETE_TO_CART, onDeleteCartStartAsync);
  }
  
  export function* onDecrementCartStartAsync({ payload }) {
    try {
      yield put({ type: types.DECREMENT_CART_QUANTITY_START, payload });
    } catch (error) {
      yield put(occuredError(error.response));
    }
  }
  export function* onDecrementCart() {
    yield takeLatest(types.DECREMENT_CART_QUANTITY, onDecrementCartStartAsync);
  }
  export function* onClearCartStartAsync() {
    try {
      yield put({ type: types.CLEAR_TO_CART_START });
    } catch (error) {
      yield put(occuredError(error.response));
    }
  }
  export function* onClearCart() {
    yield takeLatest(types.CLEAR_TO_CART, onClearCartStartAsync);
  }
  
  
  export function* onGetTotalStartAsync() {
    try {
      yield put({ type: types.GET_TOTAL_CART_START });
    } catch (error) {
      yield put(occuredError(error.response));
    }
  }
  export function* onGetTotal() {
    yield takeLatest(types.GET_TOTAL_CART, onGetTotalStartAsync);
  }
  
  
  export function* onCreateOrderStartAsync({ payload }) {
    try {
      console.log("In saga create,")
      const response = yield call( creatorderApi,payload);

      console.log("order response", response.data);
      if (response.status === 200) {
        yield put(creatOrdertostart(response.data));
  
      }
    } catch (error) {
      yield put(occuredError(error.response));
    }
  }
  export function* onCreateOrder(){
    yield takeLatest(types.CREATE_ORDER,onCreateOrderStartAsync);
  }
  
  
const productsagas =[
    fork(onLoadProducts),
    fork(onAddtoCart),
    fork(onDeletetoCart),
    fork(onDecrementCart),
    fork(onClearCart),
    fork(onGetTotal),
    fork(onCreateOrder),
];

export default function* rootSaga() {
    yield all(productsagas);
};