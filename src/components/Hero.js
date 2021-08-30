import styled from "styled-components";
import heroImg from "../assets/illustration-working.svg";
import { MainHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import { sectionSpacingSm, maxWidthLg } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .hero-img {
    ${Responsive.md`
      order: -1;
    `}
  }
`;

const Hero = () => {
  return (
    <header>
      <Container>
        <div>
          <MainHeading data-aos="fade-up">
            More than just shorter links
          </MainHeading>
          <Paragraph hero data-aos="fade-up" data-aos-delay="100">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Paragraph>
          <div data-aos="fade-up" data-aos-delay="200">
            <Button primaryLg>Get Started</Button>
          </div>
        </div>
        <img
          src={heroImg}
          alt="illustration of person working"
          className="hero-img"
          data-aos="fade-down"
        />
      </Container>
    </header>
  );
};

export default Hero;
