import styled from "styled-components";
import { maxWidthLg } from "../abstracts/Mixins";
import Button from "./styledElements/Buttons";
import bgPattern from "../assets/bg-shorten-desktop.svg";

const Article = styled.article`
  transform: translateY(8rem);
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
  padding: var(--gap);
  border-radius: var(--mainRadius);
  background: var(--darkPurple) url(${bgPattern}) center center/cover no-repeat;

  .shorten-link-input {
    width: 80%;
    padding: 1.5rem 2.5rem;
    outline: 0;
    border: 0;
    font-size: 2rem;
    flex: 85%;
    border-radius: var(--mainRadius);
  }

  .shorten-link-btn {
    flex: 15%;
    text-align: center;
  }
`;

const ShortenLink = () => {
  return (
    <Article>
      <Container>
        <input
          className="shorten-link-input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <Button secondaryLg className="shorten-link-btn">
          Shorten It!
        </Button>
      </Container>
    </Article>
  );
};

export default ShortenLink;
