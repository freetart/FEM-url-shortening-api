import styled from "styled-components";
import { flexCenter } from "../abstracts/Mixins";
import { StatHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Responsive from "../abstracts/Responsive";

const Stat = styled.article`
  &:nth-child(2) {
    transform: translateY(5rem);

    ${Responsive.xl`
      transform: translateY(0);
    `}
  }

  &:nth-child(3) {
    transform: translateY(10rem);

    ${Responsive.xl`
      transform: translateY(0);
    `}
  }
`;

const Container = styled.div`
  padding: 5rem;
  position: relative;
  background-color: var(--white);
  border-radius: var(--mainRadius);

  ${Responsive.lg`
    text-align: center;
  `}

  ${Responsive.xs`
    padding: 4rem 2rem;
  `}

  .stat-icon-container {
    ${flexCenter}
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    background-color: var(--darkPurple);
    margin-bottom: 2rem;
    position: absolute;
    top: -5rem;
    left: -2rem;

    ${Responsive.lg`
      top: -10%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  }

  .stat-icon {
    width: 5rem;
  }
`;

const Statistic = ({ icon, title, description }) => {
  return (
    <Stat>
      <Container>
        <div className="stat-icon-container">
          <img className="stat-icon" src={icon} alt="" />
        </div>
        <StatHeading>{title}</StatHeading>
        <Paragraph stat>{description}</Paragraph>
      </Container>
    </Stat>
  );
};

export default Statistic;
