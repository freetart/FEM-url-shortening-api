import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Button = styled.a`
  ${headingStyles}
  border: 0;
  outline: 0;
  padding: 1.5rem 2.5rem;
  cursor: pointer;
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);
  background-color: var(--teal);
  color: var(--white);

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  ${({ primarySm }) =>
    primarySm &&
    css`
      font-size: 1.6rem;
      border-radius: var(--btnRadius);
    `}

  ${({ primarySmMobile }) =>
    primarySmMobile &&
    css`
      font-size: 1.6rem;
      border-radius: var(--btnRadius);
      width: 100%;
      text-align: center;
    `}

  ${({ primaryLg }) =>
    primaryLg &&
    css`
      font-size: 2rem;
      border-radius: var(--btnRadius);
    `}
  
  ${({ secondarySm }) =>
    secondarySm &&
    css`
      font-size: 1.6rem;
      border-radius: var(--mainRadius);
      text-align: center;

      ${Responsive.md`
        width: 100%;
      `}
    `}

  ${({ secondaryLg }) =>
    secondaryLg &&
    css`
      font-size: 2rem;
      border-radius: var(--mainRadius);

      ${Responsive.md`
        width: 100%;
      `}
    `}
`;

export default Button;
