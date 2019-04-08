const baseUnit = 8;
const unit = 'px';

const spaces = ({
  micro: `${baseUnit}${unit}`,
  small: `${2 * baseUnit}${unit}`,
  base: `${3 * baseUnit}${unit}`,
  large: `${4 * baseUnit}${unit}`,
  mega: `${6 * baseUnit}${unit}`,
});

export default spaces;
