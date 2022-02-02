import { useSelector } from "react-redux"
import Header from "components/Header"
import Filter from "containers/Filter"
import ProductList from "containers/ProductList"
import styled from "styled-components"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"

const Container = styled.div`
  display: grid;
  gap: 10px;
  margin: 30px 0px;
  grid-template-columns: auto;
  @media ${BREAKPOINTS.laptop} {
    grid-template-columns: auto auto auto;
  }
`

function App() {
  const appState = useSelector((state: any) => state.app)

  return (
    <div className="App">
      <Header />
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
