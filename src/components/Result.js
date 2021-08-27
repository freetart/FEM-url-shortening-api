import styled from "styled-components";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";

const Container = styled.article`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-radius: var(--mainRadius);

  .result-right {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Result = ({ userInput, generatedLink }) => {
  return (
    <Container>
      <Paragraph result>{userInput}</Paragraph>
      <div className="result-right">
        <Paragraph resultLink>{generatedLink}</Paragraph>
        <Button secondarySm>Copy</Button>
      </div>
    </Container>
  );
};

export default Result;
