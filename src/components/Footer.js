import styled from "styled-components";
import logoLight from "../assets/logolight.svg";
import Link from "./styledElements/Link";
import { FooterHeading } from "./styledElements/Headings";
import { maxWidthLg, sectionSpacingMd } from "../abstracts/Mixins";
import { footerLinksData, footerSocialData } from "../data";
import Responsive from "../abstracts/Responsive";

const FooterSection = styled.footer`
  background-color: #000;
  color: var(--white);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: 2fr 3fr 1.5fr;
  gap: var(--gap);

  ${Responsive.xl`
    grid-template-columns: 1fr 3fr; 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .footer-logo {
    width: 15rem;

    ${Responsive.md`
      margin: 0 auto;
    `}
  }

  .footer-links {
    display: flex;
    gap: 10rem;

    ${Responsive.md`
      flex-direction: column;
      gap: var(--gap);
    `}
  }

  .footer-link {
    display: flex;
    flex-direction: column;
  }

  .footer-socials {
    display: flex;
    gap: var(--gap);

    ${Responsive.lg`
      margin: 0 auto;
    `}
  }

  .footer-social {
    font-size: var(--md);
    color: var(--white);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--teal);
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <img className="footer-logo" src={logoLight} alt="shortly logo" />
        <ul className="footer-links">
          {footerLinksData.map((link) => (
            <div key={link.id} className="footer-link">
              <FooterHeading>{link.title}</FooterHeading>
              {link.links.map((item, idx) => (
                <Link href="#!" footer key={idx}>
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </ul>
        <div className="footer-socials">
          {footerSocialData.map((social) => (
            <a href="#!" key={social.id} className="footer-social">
              {social.icon}
            </a>
          ))}
        </div>
      </Container>
    </FooterSection>
  );
};

export default Footer;
