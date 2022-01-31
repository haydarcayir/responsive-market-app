import { useState } from "react"
import cls from "classnames"
import TextInput from "components/InputText"
import InputCheckbox from "components/InputCheckbox"
import InputRadio from "components/InputRadio"
import styled from "styled-components"

import SORTING_OPTIONS from "libs/constants/SORTING_OPTIONS"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"
import Button from "components/Button"

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

const InputRadioContainer = styled.div`
  background-color: var(--white);
  padding: 25px;
  width: 300px;
  margin-top: 10px;
  border-radius: 3px;
`

const Icon = styled.span`
  margin: 5px;
  @media ${BREAKPOINTS.laptop} {
    display: none;
  }
`

const Filter = ({ onClickIsactive }: any) => {
  const [isActive, setIsActive] = useState(false)

  const sortingOptions = Object.values(SORTING_OPTIONS).map((entry) => ({
    label: entry.label,
    value: entry.value,
  }))

  return (
    <>
      <Icon
        onClick={() => {
          setIsActive(!isActive)
          onClickIsactive(!isActive)
        }}
      >
        icon
      </Icon>
      <FilterContainer className={cls({ active: isActive })}>
        <div>
          <label>Sorting</label>
          <InputRadioContainer>
            {sortingOptions.map((item) => {
              return <InputRadio name={"item.value"} label={item.label} />
            })}
          </InputRadioContainer>
        </div>
        <div>
          <label>Brands</label>

          <InputRadioContainer>
            <TextInput name="brand" placeholder="Search brand" />
            {sortingOptions.map((item) => {
              return <InputCheckbox name={"item.value"} label={item.label} />
            })}
          </InputRadioContainer>
        </div>
        <div>
          <label>Tags</label>
          <InputRadioContainer>
            <TextInput name="tag" placeholder="Search tag" />
            {sortingOptions.map((item) => {
              return (
                <InputCheckbox
                  name={"haydar" + item.value}
                  label={item.label}
                />
              )
            })}
          </InputRadioContainer>
        </div>
        {isActive && <Button className="w-50" text="Uygula" />}
      </FilterContainer>
    </>
  )
}

export default Filter
