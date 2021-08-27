import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 8rem;
  color: var(--black);
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4rem;
  color: var(--black);
`;

export const StatHeading = styled.h3`
  ${headingStyles}
  font-size: 2.2rem;
  color: var(--black);
`;
