import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.a`
  ${headingStyles}
  border: 0;
  outline: 0;
  border-radius: var(--btnRadius);
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--teal);
      color: var(--white);

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    `}
`;

export default Button;
