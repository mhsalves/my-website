import styled, { css } from 'styled-components';

const MenuListContainer = styled.ul`
  width: 100%;
`;

const MenuListItem = styled.li`
  ${({ centered }) => centered && css`text-align: center;`}

  ${({ theme: { typography } }) => typography.regular}
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  padding: ${({ theme: { space } }) => space.micro};
  color: ${({ theme: { colors } }) => colors.silver.dark};

  &:hover {
    color: ${({ theme: { colors } }) => colors.silver.default};
  }
`;

export {
  MenuListContainer,
  MenuListItem,
};
