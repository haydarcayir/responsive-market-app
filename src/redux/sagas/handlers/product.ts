import { call, put } from "redux-saga/effects"
import { setItems } from "../../ducks/itemSlice"
import { requestGetItems } from "../requests/product"
import { TResponseBaseModel } from "libs/models/response-base-model"

type TData = {
  account: number
  address: string
  city: string
  contact: string
  name: string
  slug: string
  state: string
  zip: string
}[]

type TResponseData = {
  length: number
  data: TData[]
}

export function* handleGetItems(action: any) {
  const { page } = action.payload
  try {
    const { data }: TResponseBaseModel<TResponseData> = yield call(
      requestGetItems,
      page
    )
    yield put(setItems(data))
  } catch (error) {
    console.log(error)
  }
}
