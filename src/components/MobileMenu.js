import styled from "styled-components";
import Link from "./styledElements/Link";
import Button from "./styledElements/Buttons";
import bgPattern from "../assets/bg-shorten-desktop.svg";

const Aside = styled.aside`
  background: var(--darkPurple) url(${bgPattern}) center center/cover no-repeat;
  z-index: 1000;
  border-radius: 2rem;
  width: 85%;
  margin: 1rem auto 0 auto;
  animation: fadeIn 0.5s linear;

  @media (min-width: 850px) {
    display: none;
  }

  .menu-content {
    align-items: center;
    flex-direction: column;
    padding: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
    text-align: center;
    padding-bottom: 3rem;
    border-bottom: 0.1rem solid var(--darkGray);
  }

  .menu-cta {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding-top: 3rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const MobileMenu = ({ isActive }) => {
  if (isActive) {
    return (
      <Aside>
        <div className="menu-content">
          <ul className="menu-links">
            <li>
              <Link mobile href="#!">
                Features
              </Link>
            </li>
            <li>
              <Link mobile href="#!">
                Pricing
              </Link>
            </li>
            <li>
              <Link mobile href="#!">
                Resources
              </Link>
            </li>
          </ul>
          <div className="menu-cta">
            <Link mobile href="#!">
              Login
            </Link>
            <Button primarySmMobile>Sign Up</Button>
          </div>
        </div>
      </Aside>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
