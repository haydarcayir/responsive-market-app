import cls from "classnames"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"
import Button from "components/Button"
import BrandFilter from "./BrandFilter"
import TagFilter from "./TagFilter"
import Sort from "./Sort"
import { setApp } from "redux/ducks/appSlice"

const FilterContainer = styled.div`
  display: none;
  &.active {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${BREAKPOINTS.laptop} {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
    padding-right: 20px;
    gap: 30px;
  }
`

const Filter = () => {
  const appState = useSelector((state: any) => state.app)
  const dispatch = useDispatch()

  const handleChangeSort = (e: any) => {
    dispatch(setApp({ sort: e.target.value }))
  }

  const handleChangeBrandFilter = (e: any) => {
    if (e.target.checked) {
      dispatch(
        setApp({
          filteredBrands: [
            ...(appState.filteredBrands ? [...appState.filteredBrands] : []),
            e.target.value,
          ],
        })
      )
    } else {
      const filtered = appState.filteredBrands.filter(
        (i: any) => i !== e.target.value
      )
      dispatch(
        setApp({
          filteredBrands: filtered.length > 0 ? filtered : null,
        })
      )
    }
  }

  const handleChangeTagFilter = (e: any) => {
    if (e.target.checked) {
      dispatch(
        setApp({ filteredTags: [...appState.filteredTags, e.target.value] })
      )
    } else {
      dispatch(
        setApp({
          filteredTags: appState.filteredTags.filter(
            (i: any) => i !== e.target.value
          ),
        })
      )
    }
  }

  return (
    <div>
      <FilterContainer
        className={cls({ active: appState.isFilterAreaForMobile })}
      >
        <Sort onChange={handleChangeSort} />
        <BrandFilter onChange={handleChangeBrandFilter} />
        <TagFilter onChange={handleChangeTagFilter} />
        {appState.isFilterAreaForMobile && (
          <Button
            className="w-50"
            text="Uygula"
            onClick={() => {
              dispatch(setApp({ isFilterAreaForMobile: false }))
            }}
          />
        )}
      </FilterContainer>
    </div>
  )
}

export default Filter
