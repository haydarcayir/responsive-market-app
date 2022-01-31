import { takeLatest } from "redux-saga/effects"
import { handleGetProduct } from "./handlers/product"
import { getProduct } from "../ducks/productSlice"

export function* watcherSaga() {
  yield takeLatest(getProduct.type, handleGetProduct)
}
