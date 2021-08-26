import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const NavLink = styled.a`
  ${headingStyles}
  font-size: 1.5rem;
  color: var(--darkGray);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--black);
  }
`;

export default NavLink;
