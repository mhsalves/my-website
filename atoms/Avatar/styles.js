import styled, { css } from 'styled-components';

const roundedStyle = css`
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarContainer = styled.div`
  padding: ${({ theme: { space } }) => space('small')};
  background-color: rgba(255, 255, 255, .6);

  ${({ rounded }) => rounded && roundedStyle}
`;

const AvatarContent = styled.div`
  width: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
  position: relative;

  ${({ rounded }) => rounded && roundedStyle}
`;

const AvatarImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  height: 100%;
`;

export {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
};
