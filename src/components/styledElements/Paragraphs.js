import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}

  ${({ hero }) =>
    hero &&
    css`
      color: var(--darkGray);
      font-size: 2.2rem;
      padding: 2rem 0;
    `}
`;

export default Paragraph;
