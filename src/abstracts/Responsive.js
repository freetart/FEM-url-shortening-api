import { css } from "styled-components";

const breakpoints = {
  xs: "500px",
  sm: "630px",
  md: "850px",
  lg: "920px",
  xl: "1050px",
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
