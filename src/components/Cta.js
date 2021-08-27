import styled from "styled-components";
import { SectionHeading } from "./styledElements/Headings";
import Button from "./styledElements/Buttons";
import { sectionSpacingSm, maxWidthLg, flexCenter } from "../abstracts/Mixins";
import bgPattern from "../assets/bg-boost-desktop.svg";

const Section = styled.div`
  background: var(--darkPurple) url(${bgPattern}) center center/cover no-repeat;
`;

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthLg}
  ${flexCenter}
  flex-direction: column;
  text-align: center;
  gap: 3rem;
`;

const Cta = () => {
  return (
    <Section>
      <Container>
        <SectionHeading light>Boost your links today</SectionHeading>
        <Button primaryLg>Get Started</Button>
      </Container>
    </Section>
  );
};

export default Cta;
