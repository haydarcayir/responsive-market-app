import { takeLatest } from "redux-saga/effects"
import { handleGetItems } from "./handlers/item"
import { getItems } from "../ducks/itemSlice"
import { getCompanies } from "../ducks/companySlice"
import { handleGetCompanies } from "./handlers/company"

export function* watcherSaga() {
  yield takeLatest(getItems.type, handleGetItems)
  yield takeLatest(getCompanies.type, handleGetCompanies)
}
