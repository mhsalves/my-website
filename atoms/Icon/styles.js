import styled, { css, keyframes } from 'styled-components';
import colorUtil from '../../helpers/colorUtils';

const sizeSmall = css`
  width: ${({ theme: { space } }) => space.small};
  height: ${({ theme: { space } }) => space.small};
`;

const sizeBase = css`
  width: ${({ theme: { space } }) => space.base};
  height: ${({ theme: { space } }) => space.base};
`;

const sizeLarge = css`
  width: ${({ theme: { space } }) => space.large};
  height: ${({ theme: { space } }) => space.large};
`;

const beforeTextSpace = css`
  margin-right: ${({ theme: { space } }) => space.micro};
`;

const spinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const IconSvg = styled.svg`
  ${({ size }) => size === 'small' && sizeSmall}
  ${({ size }) => size === 'base' && sizeBase}
  ${({ size }) => size === 'large' && sizeLarge}

  ${({ beforeText }) => beforeText && beforeTextSpace};

  ${({ color, theme }) => color && css`color: ${colorUtil(color, theme)};`}
  ${({ rotate }) => rotate && css`transform: rotate(${rotate}deg);`}
  ${({ spin }) => spin && css`animation: ${spinAnimation} 1.8s linear infinite;`}
`;

export default IconSvg;
