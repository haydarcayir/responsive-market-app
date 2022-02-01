import { useState, useEffect } from "react"
import Header from "components/Header"
import Filter from "containers/Filter"
import ProductList from "containers/ProductList"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  gap: 10px;
  margin: 30px 0px;
  grid-template-columns: auto auto auto;
`

function App() {
  const [isActive, setIsActive] = useState(false)

  console.log("app")
  return (
    <div className="App">
      <Header />
      <Container>
        <div>
          <Filter onClickIsactive={(e: boolean) => setIsActive(e)} />
        </div>
        <div>{!isActive && <ProductList />}</div>
      </Container>
    </div>
  )
}

export default App
