/*
 * Based in the rule mobile-first all breakpoints has only min-width.
 * PS: the xs point is unnecessary because we don't need a "min-width: 0px"
 */
const breakpoints = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};

export default breakpoints;
