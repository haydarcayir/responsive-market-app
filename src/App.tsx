import { useState, useEffect } from "react"
import Header from "components/Header"
import Filter from "containers/Filter"
import ProductList from "containers/ProductList"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "redux/ducks/productSlice"

const Container = styled.div`
  display: grid;
  gap: 10px;
  margin: 30px 0px;
  grid-template-columns: auto auto auto;
`

function App() {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <Container>
        <Filter onClickIsactive={(e: boolean) => setIsActive(e)} />
        {!isActive && <ProductList />}
      </Container>
    </div>
  )
}

export default App
