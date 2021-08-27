import styled from "styled-components";
import logo from "../assets/logo.svg";
import Link from "./styledElements/Link";
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
              <Link href="#!" nav>
                Features
              </Link>
            </li>
            <li>
              <Link href="#!" nav>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#!" nav>
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-cta">
          <Link href="#!" nav>
            Login
          </Link>
          <Button href="#!" primarySm>
            Sign Up
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
