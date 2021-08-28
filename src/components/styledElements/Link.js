import styled, { css } from "styled-components";
import { headingStyles, textStyles } from "../../abstracts/Mixins";

const Link = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  transition: var(--mainTransition);
  color: var(--darkGray);

  ${({ nav }) =>
    nav &&
    css`
      ${headingStyles}

      &:hover,
      &:focus {
        color: var(--black);
      }
    `}

  ${({ mobile }) =>
    mobile &&
    css`
      ${headingStyles}
      padding: 0.5rem 0;
      font-size: 1.8rem;
      color: var(--white);

      &:hover,
      &:focus {
        color: var(--teal);
      }
    `}

  ${({ footer }) =>
    footer &&
    css`
      ${textStyles}
      padding: 0.5rem 0;

      &:hover,
      &:focus {
        color: var(--teal);
      }
    `}
`;

export default Link;
