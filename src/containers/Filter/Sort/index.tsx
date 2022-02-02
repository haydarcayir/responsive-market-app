import React from "react"
import InputRadio from "components/InputRadio"
import styled from "styled-components"
import SORTING_OPTIONS from "libs/constants/SORTING_OPTIONS"

const InputRadioContainer = styled.div`
  background-color: var(--white);
  padding: 25px;
  width: 325px;
  margin-top: 10px;
  border-radius: 3px;
`

type TProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Sort = ({ onChange }: TProps) => {
  const sortingOptions = Object.values(SORTING_OPTIONS).map((entry) => ({
    label: entry.label,
    value: entry.value,
  }))
  return (
    <div>
      <label>Sorting</label>
      <InputRadioContainer>
        {sortingOptions.map((item, index) => {
          return (
            <InputRadio
              key={index}
              name="sort"
              label={item.label}
              value={item.value}
              onChange={onChange}
            />
          )
        })}
      </InputRadioContainer>
    </div>
  )
}

export default React.memo(Sort)
