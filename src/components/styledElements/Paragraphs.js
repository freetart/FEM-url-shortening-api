import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}

  ${({ hero }) =>
    hero &&
    css`
      font-size: 2.2rem;
      padding: 2rem 0;
      color: var(--darkGray);
    `}
`;

export default Paragraph;
