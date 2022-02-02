import styled from "styled-components"
import PriceLabel from "components/PriceLabel"
import PRICE_LABEL_COLOR_OPTIONS from "libs/constants/PRICE_LABEL_COLOR_OPTIONS"
import BREAKPOINTS from "libs/constants/BREAKPOINTS"

const LogoImage = require("../../images/Logo.png")
const BasketImage = require("../../images/basket.png")

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
  @media ${BREAKPOINTS.laptop} {
    height: 75px;
    position: absolute;
    right: 100px;
    top: 0px;
  }
`

const StyledBasketImage = styled.img`
  height: 24px;
  margin: -5px 5px 0;
  @media ${BREAKPOINTS.laptop} {
    height: 24px;
  }
`
type TProps = {
  totalPrice: number
}

const Header = ({ totalPrice }: TProps) => {
  return (
    <Wrapper className="navbar">
      <StyledLogoImage src={LogoImage} alt="logo" />
      <Basket id="basket">
        <StyledBasketImage src={BasketImage} alt="basket" />
        <PriceLabel color={PRICE_LABEL_COLOR_OPTIONS.WHITE}>
          {Number.parseFloat(`${totalPrice}`).toFixed(2)}
        </PriceLabel>
      </Basket>
    </Wrapper>
  )
}

export default Header
