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
    overflow: auto;
    padding: 5px;
  }
`

type TProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const BrandFilter = ({ onChange }: TProps) => {
  const companies = useSelector((state: any) => state.companies)
  const items = useSelector((state: any) => state.items)

  const { brands } = useMemo(() => {
    let brands = []
    let sum = 0
    if (items.state === "finished" && companies.state === "finished") {
      brands = companies?.data?.map((company: any) => {
        const filteredItems = items?.data.filter(
          (i: any) => i.manufacturer === company.slug
        )
        sum += filteredItems.length
        return {
          name: company.name,
          slug: company.slug,
          count: filteredItems.length,
        }
      })
    }

    if (brands.length) {
      brands.unshift({
        name: "All",
        slug: "all",
        count: sum,
      })
    }
    return { brands }
  }, [items, companies])

  return (
    <div style={{ height: "300px", overflow: "scroll" }}>
      <label>Brands</label>
      <InputRadioContainer>
        <TextInput name="brand" placeholder="Search brand" />
        <div>
          {brands.map((brand: any, index: number) => {
            return (
              <InputCheckbox
                key={index}
                name={brand.name}
                label={brand.name}
                value={brand.slug}
                count={brand.count}
                onChange={onChange}
              />
            )
          })}
        </div>
      </InputRadioContainer>
    </div>
  )
}

export default React.memo(BrandFilter)
