import styled, { css } from 'styled-components';
import { Background, WrapperThumb } from '../ThumbFired/styles';
import arrow from '../../assets/img/arrow.svg';

export const Wrapper = styled.div`
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: 20rem;
  }

  ${({ move }) =>
    css`
      transform: translateX(calc(var(--thumb-width) * ${move}));
    `}
`;

const Arrow = css`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-fiery-rose);
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    display: inline-block;
    opacity: 1;
    transition: transform 100ms linear;
  }
`;

export const Right = styled.button`
  ${Arrow};
  right: 0;

  &::after {
    transform: rotate(-90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg);
  }

  &:active::after {
    transform: rotate(-90deg) scale(1.2) translateY(4rem);
  }
`;

export const Left = styled.button`
  ${Arrow};
  left: 0;

  &::after {
    transform: rotate(90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(90deg);
  }

  &:active::after {
    transform: rotate(90deg) scale(1.2) translateY(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --thumb-width: 400px;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 30rem;
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }

  &:hover > ${Left} {
    ${({ leftShow }) =>
      leftShow
        ? css`
            display: block;
            opacity: 0.8;
          `
        : css`
            display: none;
            opacity: 0;
          `}
  }

  & > ${Right}:hover {
    opacity: 0.9;
    transform-origin: right center;
  }
`;
