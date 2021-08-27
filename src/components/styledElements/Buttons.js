import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

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

  ${({ primaryLg }) =>
    primaryLg &&
    css`
      font-size: 2rem;
      border-radius: var(--btnRadius);
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 2rem;
      border-radius: var(--mainRadius);
    `}
`;

export default Button;
