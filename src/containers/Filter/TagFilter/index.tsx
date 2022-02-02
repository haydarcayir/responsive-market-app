import React, { useMemo } from "react"
import InputCheckbox from "components/InputCheckbox"
import TextInput from "components/InputText"
import styled from "styled-components"

import { useSelector } from "react-redux"

const InputRadioContainer = styled.div`
  background-color: var(--white);
  padding: 25px;
  width: 325px;
  margin-top: 10px;
  border-radius: 3px;
  div {
    height: 150px;
    overflow-y: auto;
    padding: 5px;
  }
`

type TProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TagFilter = ({ onChange }: TProps) => {
  const items = useSelector((state: any) => state.items)

  const { uniqueFilteredTags } = useMemo(() => {
    let allTags: string[] = []
    items?.data?.forEach((item: any) => {
      allTags = [...allTags, ...item.tags]
    })
    const uniqueTags = [...Array.from(new Set(allTags))]
    let uniqueFilteredTags: object[] = []
    if (uniqueTags.length) {
      uniqueFilteredTags = uniqueTags.map((tag) => {
        const filtered = items.data.filter((item: any) =>
          item.tags.includes(tag)
        )
        return {
          tag,
          count: filtered.length,
        }
      })
    }
    return { uniqueFilteredTags }
  }, [items])

  return (
    <div style={{ height: "300px", overflow: "scroll" }}>
      <label>Tags</label>
      <InputRadioContainer>
        <TextInput name="tag" placeholder="Search tag" />
        <div>
          {uniqueFilteredTags.map((item: any, index) => {
            return (
              <InputCheckbox
                key={index}
                name={item.tag}
                label={item.tag}
                count={item.count}
                onChange={onChange}
                value={item.tag}
              />
            )
          })}
        </div>
      </InputRadioContainer>
    </div>
  )
}

export default React.memo(TagFilter)
