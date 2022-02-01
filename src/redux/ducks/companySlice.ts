import { createSlice } from "@reduxjs/toolkit"

import { TData as TCompanyData } from "redux/sagas/handlers/company"

export type TSliceState =
  | { state: "loading"; data: TCompanyData[] }
  | { state: "finished"; data: TCompanyData[] }
  | {
      loading: boolean
      error: boolean
      contractsData?: []
    }

const companySlice = createSlice({
  name: "companies",
  initialState: { state: "loading", data: [] } as TSliceState,
  reducers: {
    getCompanies() {},
    setCompanies(state, action) {
      return {
        state: "finished",
        data: [...action.payload],
      }
    },
  },
})

export const { getCompanies, setCompanies } = companySlice.actions

export default companySlice.reducer
