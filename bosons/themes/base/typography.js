import { css } from 'styled-components';
import fonts from './fonts';

const common = css`
  margin: 0;
  padding: 0;
`;

const display = css`
  font-size: 6rem;
  line-height: 6.5rem;
  font-weight: 700;
  text-transform: uppercase;

  ${common}

  font-family: ${fonts.saira};
`;

const h2 = css`
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 700;
  text-transform: uppercase;

  ${common}

  font-family: ${fonts.saira};
`;

const h3 = css`
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 700;
  text-transform: uppercase;

  ${common}

  font-family: ${fonts.saira};
`;

const lead = css`
  font-size: 1.35rem;
  line-height: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;

  ${common}

  font-family: ${fonts.saira};
`;

const regular = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  ${common}

  font-family: ${fonts.openSans};
`;

export default {
  display,
  h2,
  h3,
  lead,
  regular,
};
