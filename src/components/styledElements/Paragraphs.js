import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Paragraph = styled.p`
  ${textStyles}
  padding: 2rem 0;
  color: var(--darkGray);

  ${({ hero }) =>
    hero &&
    css`
      font-size: 2.2rem;

      ${Responsive.md`
        font-size: 1.8rem;
      `}
    `}

  ${({ result }) =>
    result &&
    css`
      font-size: 2rem;
      color: var(--darkPurple);

      ${Responsive.md`
        font-size: 1.6rem;
      `}
    `}

  ${({ resultLink }) =>
    resultLink &&
    css`
      font-size: 2rem;
      color: var(--teal);

      ${Responsive.md`
        font-size: 1.6rem;
      `}
    `}

  ${({ section }) =>
    section &&
    css`
      font-size: 1.8rem;
      width: 50%;
      margin: 0 auto;

      ${Responsive.lg`
        width: 100%;
      `}

      ${Responsive.md`
        font-size: 1.6rem;
      `}
    `}

  ${({ stat }) =>
    stat &&
    css`
      font-size: 1.5rem;
    `}
`;

export default Paragraph;
