import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}
  padding: 2rem 0;
  color: var(--darkGray);

  ${({ hero }) =>
    hero &&
    css`
      font-size: 2.2rem;
    `}

  ${({ section }) =>
    section &&
    css`
      font-size: 1.8rem;
      width: 50%;
      margin: 0 auto;
    `}

  ${({ stat }) =>
    stat &&
    css`
      font-size: 1.5rem;
    `}
`;

export default Paragraph;
