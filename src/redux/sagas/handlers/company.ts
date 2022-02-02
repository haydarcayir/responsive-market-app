import { call, put } from "redux-saga/effects"
import { setCompanies } from "../../ducks/companySlice"
import { requestGetCompanies } from "../requests/company"
import { TResponseBaseModel } from "libs/models/response-base-model"
import { TCompany } from "libs/models/company-model"

export function* handleGetCompanies() {
  try {
    const { data }: TResponseBaseModel<TCompany[]> = yield call(
      requestGetCompanies
    )
    yield put(setCompanies(data))
  } catch (error) {
    console.log(error)
  }
}
