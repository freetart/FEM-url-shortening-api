import styled from "styled-components";
import Statistic from "./Statistic";
import {
  maxWidthLg,
  sectionSpacingMd,
  sectionSpacingSm,
} from "../abstracts/Mixins";
import { SectionHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Line from "./styledElements/Line";
import statData from "../data";

const Section = styled.section`
  background-color: var(--lightGray);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  position: relative;

  .section-title {
    ${sectionSpacingSm}
    text-align: center;
  }

  .statistics {
    ${sectionSpacingSm}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
  }
`;

const Statistics = () => {
  return (
    <Section>
      <Container>
        <div className="section-title">
          <SectionHeading>Advanced Statistics</SectionHeading>
          <Paragraph section>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Paragraph>
        </div>
        <Line />
        <div className="statistics">
          {statData.map((stat) => (
            <Statistic
              key={stat.id}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Statistics;
