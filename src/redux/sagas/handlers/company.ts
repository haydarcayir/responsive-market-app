import { call, put } from "redux-saga/effects"
import { setCompanies } from "../../ducks/companySlice"
import { requestGetCompanies } from "../requests/company"
import { TResponseBaseModel } from "libs/models/response-base-model"

export type TData = {
  slug: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  account: number
  contact: string
}[]

type TResponseData = {
  length: number
  data: TData[]
}

export function* handleGetCompanies() {
  try {
    const { data }: TResponseBaseModel<TResponseData> = yield call(
      requestGetCompanies
    )
    yield put(setCompanies(data))
  } catch (error) {
    console.log(error)
  }
}
