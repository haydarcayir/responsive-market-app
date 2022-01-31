import React from "react"
import ReactPaginate from "react-paginate"
import styled from "styled-components"
import cls from "classnames"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"

const StyledPagination = styled.div`
  margin: 25px 0px;
  text-align: center;
  max-width: 300px;
  color: var(--secondary-text-color);
  @media ${BREAKPOINTS.laptop} {
    max-width: 650px;
  }
  ul.pagination {
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      height: 40px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.selected {
        background-color: var(--main-color);
        color: var(--white);
      }
      &:hover {
        background-color: var(--main-color);
        cursor: pointer;
        color: var(--white);
      }
      &.previous {
        margin-right: 10px;
        &:hover {
          background-color: transparent;
          color: var(--main-color);
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
      }
      &.next {
        margin-left: 10px;
        &:hover {
          background-color: transparent;
          color: var(--main-color);
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
      }
    }
  }
`

type TProps = {
  onPageChange: ({ selected }: { selected: number }) => void
  pageCount: number
  className?: string
  breakLabel?: string
  nextLabel?: React.ReactNode | JSX.Element
  pageRangeDisplayed?: number | undefined
  previousLabel?: React.ReactNode | JSX.Element
  renderOnZeroPageCount?: (() => void | null) | undefined
}

const Pagination = ({
  className,
  breakLabel = "...",
  nextLabel = (
    <span>
      Next
      <AiOutlineArrowRight />
    </span>
  ),
  onPageChange,
  pageRangeDisplayed,
  pageCount,
  previousLabel = (
    <span>
      <AiOutlineArrowLeft />
      Prev
    </span>
  ),
  renderOnZeroPageCount,
}: TProps) => {
  return (
    <StyledPagination>
      <ReactPaginate
        className={cls("pagination", { className })}
        breakLabel={breakLabel}
        nextLabel={nextLabel}
        onPageChange={onPageChange}
        pageRangeDisplayed={pageRangeDisplayed}
        pageCount={pageCount}
        previousLabel={previousLabel}
        renderOnZeroPageCount={renderOnZeroPageCount}
      />
    </StyledPagination>
  )
}

export default Pagination
