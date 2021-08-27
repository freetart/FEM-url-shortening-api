import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 8rem;
  color: var(--black);
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;

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
