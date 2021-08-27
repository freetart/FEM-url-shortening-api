import styled from "styled-components";
import { maxWidthLg } from "../abstracts/Mixins";
import Result from "./Result";

const Section = styled.section`
  background-color: var(--lightGray);
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem 2rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Results = () => {
  return (
    <Section>
      <Container>
        <Result
          userInput="https://www.habibdev96.tech"
          generatedLink="https://rel.ink/k29d7d"
        />
      </Container>
    </Section>
  );
};

export default Results;
