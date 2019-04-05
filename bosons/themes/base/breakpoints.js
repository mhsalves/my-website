const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const keys = Object.keys(breakpoints);
const unit = 'px';

function up(key) {
  return `@media (min-width: ${breakpoints[key]}${unit})`;
}

function between(start, end) {
  const endIndex = keys.indexOf(end) + 1;

  if (endIndex === keys.length) {
    return up(start);
  }

  return `@media (min-width: ${breakpoints[start]}${unit}) and (max-width: ${breakpoints[keys[endIndex]]}${unit})`;
}

function get(key) {
  if (!breakpoints[key]) return null;

  return `${breakpoints[key]}${unit}`;
}

export default {
  up,
  between,
  get,
};
