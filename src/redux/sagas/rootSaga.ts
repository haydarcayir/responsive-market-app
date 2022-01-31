import { takeLatest } from "redux-saga/effects"
import { handleGetItems } from "./handlers/product"
import { getItems } from "../ducks/itemSlice"

export function* watcherSaga() {
  yield takeLatest(getItems.type, handleGetItems)
}
