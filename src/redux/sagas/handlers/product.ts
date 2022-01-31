import { call, put } from "redux-saga/effects"
import { setProduct } from "../../ducks/productSlice"
import { requestGetProduct } from "../requests/product"

type TResponse = {
  name: string[]
}

export function* handleGetProduct() {
  try {
    const response: TResponse = yield call(requestGetProduct)
    const { name } = response
    yield put(setProduct({ ...name }))
  } catch (error) {
    console.log(error)
  }
}
