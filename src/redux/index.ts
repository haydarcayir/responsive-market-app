import { configureStore } from "@reduxjs/toolkit"

import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/rootSaga"
import productReducer from "./ducks/productSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { product: productReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})
sagaMiddleware.run(watcherSaga)

export default store
