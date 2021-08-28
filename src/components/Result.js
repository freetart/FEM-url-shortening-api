import styled from "styled-components";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import Responsive from "../abstracts/Responsive";

const Container = styled.article`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: var(--mainRadius);

  ${Responsive.md`
    flex-direction: column;
  `}

  .result-right {
    display: flex;
    align-items: center;
    gap: var(--gap);

    ${Responsive.md`
      border-top: 0.1rem solid var(--lightGray);
      flex-direction: column;
      gap: 1rem;
    `}
  }
`;

const Result = () => {
  return (
    <Container>
      <Paragraph result></Paragraph>
      <div className="result-right">
        <Paragraph resultLink></Paragraph>
        <Button secondarySm>Copy</Button>
      </div>
    </Container>
  );
};

export default Result;
