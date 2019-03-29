import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';

const globalCSS = createGlobalStyle`
  ${reset}
  ${styledNormalize}
`;

export default globalCSS;
