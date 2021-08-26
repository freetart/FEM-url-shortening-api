import styled from "styled-components";
import logo from "../assets/logo.svg";
import NavLink from "./styledElements/NavLink";
import Button from "./styledElements/Buttons";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-info,
  .nav-list,
  .nav-cta {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="nav-info">
          <img className="nav-logo" src={logo} alt="shortly logo" />
          <ul className="nav-list">
            <li>
              <NavLink href="#!">Features</NavLink>
            </li>
            <li>
              <NavLink href="#!">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="#!">Resources</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-cta">
          <NavLink href="#!">Login</NavLink>
          <Button href="#!" primary>
            Sign Up
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
