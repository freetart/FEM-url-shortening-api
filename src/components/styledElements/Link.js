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
