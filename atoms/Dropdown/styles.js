import styled, { css } from 'styled-components';

const showStyle = css`
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const contentStyle = css`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;

  transition: opacity .2s ease, visibility .2s ease;
  ${showStyle}
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline;
`;

export {
  DropdownContainer,
  contentStyle,
};
