import { useForm } from "react-hook-form";
import styled from "styled-components";
import { maxWidthLg, headingStyles, textStyles } from "../abstracts/Mixins";
import bgPattern from "../assets/bg-shorten-desktop.svg";
import Responsive from "../abstracts/Responsive";

const Article = styled.article`
  transform: translateY(8rem);
  position: relative;
  z-index: 10;
  margin: 0 2rem;
`;

const Form = styled.form`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: var(--gap);
  padding: var(--gap);
  border-radius: var(--mainRadius);
  background: var(--darkPurple) url(${bgPattern}) center center/cover no-repeat;

  ${Responsive.md`
    gap: 4rem;
    flex-direction: column;
    padding: 3rem 2rem;
  `}

  .shorten-link-input {
    width: 80%;
    padding: 1.5rem 2.5rem;
    outline: 0;
    border: 0;
    font-size: 2rem;
    flex: 85%;
    border-radius: var(--mainRadius);

    ${Responsive.md`
      width: 100%;
    `}

    &.error {
      border: 0.3rem solid var(--red);
      color: var(--red);
    }
  }

  .shorten-link-btn {
    ${headingStyles}
    flex: 15%;
    text-align: center;
    border: 0;
    outline: 0;
    padding: 1.5rem 2.5rem;
    cursor: pointer;
    font-size: 2rem;
    box-shadow: var(--mainShadow);
    transition: var(--mainTransition);
    background-color: var(--teal);
    color: var(--white);
    border-radius: var(--btnRadius);

    ${Responsive.md`
      width: 100%;
    `}

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .shorten-link-message {
    ${textStyles}
    position: absolute;
    bottom: 2rem;
    left: 6rem;
    font-size: 1.6rem;
    color: var(--red);

    ${Responsive.md`
      top: 10rem;
      left: 3rem;
    `}
  }
`;

const ShortenLink = ({ handleUserInput, onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Article>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("link", { required: true })}
          className={
            errors.link ? `shorten-link-input error` : `shorten-link-input`
          }
          type="text"
          placeholder="Shorten a link here..."
          autoComplete="off"
          onChange={handleUserInput}
        />
        {errors.link && (
          <small className="shorten-link-message">
            input field is required.
          </small>
        )}
        <input className="shorten-link-btn" type="submit" value="Shorten It!" />
      </Form>
    </Article>
  );
};

export default ShortenLink;
