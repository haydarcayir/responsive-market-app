const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
}

type TBreakpoints = {
  mobile: string
  tablet: string
  laptop: string
}

const BREAKPOINTS: TBreakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
}

export default BREAKPOINTS
