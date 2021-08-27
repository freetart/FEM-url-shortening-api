import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 8rem;
  color: var(--black);

  ${Responsive.md`
    font-size: 4.2rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;

  ${Responsive.md`
    font-size: 2.8rem;
  `}

  ${({ dark }) =>
    dark &&
    css`
      color: var(--black);
    `}

  ${({ light }) =>
    light &&
    css`
      color: var(--white);
    `}
`;

export const StatHeading = styled.h3`
  ${headingStyles}
  font-size: 2.2rem;
  color: var(--black);
`;

export const FooterHeading = styled.h4`
  ${headingStyles}
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--white);
`;
