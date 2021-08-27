import styled from "styled-components";
import logoLight from "../assets/logolight.svg";
import Link from "./styledElements/Link";
import { FooterHeading } from "./styledElements/Headings";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import { footerLinksData } from "../data";
import { footerSocialData } from "../data";

const FooterSection = styled.footer`
  background-color: var(--black);
  color: var(--white);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: 2fr 3fr 1.5fr;

  .footer-logo {
    width: 15rem;
  }

  .footer-links {
    display: flex;
    gap: 10rem;
  }

  .footer-link {
    display: flex;
    flex-direction: column;
  }

  .footer-socials {
    display: flex;
    gap: var(--gap);
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
                <Link footer key={idx}>
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
