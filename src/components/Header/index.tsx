import styled from "styled-components"
import PriceLabel from "../PriceLabel"
import PRICE_LABEL_COLOR_OPTIONS from "../../libs/constants/PRICE_LABEL_COLOR_OPTIONS"
import BREAKPOINTS from "../../libs/constants/BREAKPOINTS"
import { RiShoppingBasketLine } from "react-icons/ri"

const LogoImage = require("../../images/Logo.png")

const Wrapper = styled.div`
  background-color: var(--main-color);
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media ${BREAKPOINTS.laptop} {
    justify-content: center;
    height: 75px;
  }
`

const StyledLogoImage = styled.img`
  height: 25px;
  margin-left: 10px;
  @media ${BREAKPOINTS.laptop} {
    height: 40px;
  }
`
const Basket = styled.div`
  height: 50px;
  width: 130px;
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 5px;
  color: var(--white);
  cursor: pointer;
  svg {
    margin-top: -3px;
  }
  @media ${BREAKPOINTS.laptop} {
    height: 75px;
    position: absolute;
    right: 100px;
    top: 0px;
  }
`

type TProps = {
  totalPrice: number
  onClickBasket: () => void
}

const Header = ({ totalPrice, onClickBasket }: TProps) => {
  return (
    <Wrapper className="navbar">
      <StyledLogoImage src={LogoImage} alt="logo" />
      <Basket id="basket" onClick={onClickBasket}>
        <RiShoppingBasketLine />
        <PriceLabel color={PRICE_LABEL_COLOR_OPTIONS.WHITE}>
          {Number.parseFloat(`${totalPrice}`).toFixed(2)}
        </PriceLabel>
      </Basket>
    </Wrapper>
  )
}

export default Header
