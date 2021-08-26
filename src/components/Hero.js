import styled from "styled-components";
import heroImg from "../assets/illustration-working.svg";
import { MainHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import { sectionSpacingSm, maxWidthLg } from "../abstracts/Mixins";

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const Hero = () => {
  return (
    <header>
      <Container>
        <div className="hero-info">
          <MainHeading>More than just shorter links</MainHeading>
          <Paragraph hero>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </Paragraph>
          <Button primary>Get Started</Button>
        </div>
        <img
          src={heroImg}
          alt="illustration of person working"
          className="hero-img"
        />
      </Container>
    </header>
  );
};

export default Hero;
