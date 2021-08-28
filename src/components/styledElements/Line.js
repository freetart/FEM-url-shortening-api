import styled from "styled-components";
import Responsive from "../../abstracts/Responsive";

const Line = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 1rem;
  width: 50%;
  margin: 0 auto;
  background-color: var(--teal);

  ${Responsive.xl`
    top: 60%;
  `}

  ${Responsive.lg`
    transform: rotate(90deg);
    left: 10%;
    width: 80%;
  `}

  ${Responsive.sm`
    top: 60%;
    left: 5%;
    width: 90%;
    transform: rotate(90deg) scale(1.5);
  `}

  ${Responsive.xxs`
    left: 0%;
    width: 100%;
    transform: rotate(90deg) scale(1.8);
  `}
`;

export default Line;
