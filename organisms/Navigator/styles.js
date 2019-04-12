import styled from 'styled-components';

const NavigatorContainer = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.primary};

  ${({ theme: { breakpoints } }) => breakpoints.lg} {
    width: 17rem;
    height: 100%;
  }
`;

/* Mobile */

const NavigatorGroupMobile = styled.div`
  display: block;

  ${({ theme: { breakpoints } }) => breakpoints.lg} {
    display: none;
  }
`;

const NavigatorGroupMobileHandler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NavigatorName = styled.span`
  ${({ theme: { typography } }) => typography.lead};
  font-family: ${({ theme: { fonts } }) => fonts.openSans};
  text-transform: inherit;
  color: ${({ theme: { colors } }) => colors.silver.light};

  padding: ${({ theme: { space } }) => `${space.small} ${space.micro}`};

  ${({ theme: { breakpoints } }) => breakpoints.sm} {
    padding: ${({ theme: { space } }) => space.small};
  }
`;

const NavigatorButton = styled.button`
  background: transparent;
  cursor: pointer;

  border: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding: ${({ theme: { space } }) => space.small};
`;

const NavigatorContentList = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  ${({ contentStyle }) => contentStyle}
`;

/* Desktop */

const NavigatorGroupDesktop = styled.div`
  display: none;

  width: 100%;
  height: 100%;
  padding: ${({ theme: { space } }) => space.mega};

  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  ${({ theme: { breakpoints } }) => breakpoints.lg} {
    display: flex;
  }
`;

const NavigatorGroupSpace = styled.div`
  margin-bottom: ${({ theme: { space } }) => space.small};
`;

export {
  NavigatorContainer,
  NavigatorGroupMobile,
  NavigatorGroupMobileHandler,
  NavigatorName,
  NavigatorButton,
  NavigatorContentList,
  NavigatorGroupDesktop,
  NavigatorGroupSpace,
};
