import { useSelector, useDispatch } from "react-redux"
import Header from "./components/Header"
import Filter from "./containers/Filter"
import ProductList from "./containers/ProductList"
import styled from "styled-components"
import BREAKPOINTS from "./libs/constants/BREAKPOINTS"
import { setApp } from "./redux/ducks/appSlice"

import { TRootReducer } from "./libs/models/root-reducer-model"
const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto;
  margin: 25px 15px 20px 5px;
  @media ${BREAKPOINTS.laptop} {
    margin: 25px 10px;
    grid-template-columns: auto auto auto;
  }
`

function App() {
  const appState = useSelector((state: TRootReducer) => state.app)
  const basketState = useSelector((state: TRootReducer) => state.basket)
  const dispatch = useDispatch()

  const totalPrice = basketState.items.reduce((acc, obj) => {
    return acc + obj.price * obj.count
  }, 0)
  return (
    <div className="App">
      <Header
        totalPrice={totalPrice}
        onClickBasket={() =>
          dispatch(setApp({ isBasketShowed: !appState.isBasketShowed }))
        }
      />
      <Container>
        <div>
          <Filter />
        </div>
        <div>{!appState.isFilterAreaForMobile && <ProductList />}</div>
      </Container>
    </div>
  )
}

export default App
