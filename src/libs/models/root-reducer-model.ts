import { TSliceItem } from "redux/ducks/itemSlice"
import { TSliceState as TApp } from "redux/ducks/appSlice"
import { TSliceState as TBasket } from "redux/ducks/basketSlice"
import { TSliceState as TCompany } from "redux/ducks/companySlice"

export type TRootReducer = {
  items: TSliceItem
  companies: TCompany
  app: TApp
  basket: TBasket
}
