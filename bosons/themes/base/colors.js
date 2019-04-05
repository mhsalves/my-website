const main = {
  primary: '#BD5D38',
};

const mainKeys = Object.keys(main);

const defaults = {
  coal: {
    default: '#868E96',
    dark: '#343A40',
  },
  silver: {
    default: '#F2F0F7',
    light: '#F9F7FC',
    dark: '#E8E6F0',
  },
};

const colors = {
  ...main, ...defaults,
};

/*
 * This function need receive a label and return a hex color of Style Guide
 *
 * If didn't find a color may return the primary.
 *
 * The label can be a composed or simple string
 * For example:
 * - coal dark
 * - primary
 * - silver
 *
 * In the case of combined colors need return the "default"
 * For example:
 * - silver -> silver deafult
 * - coal -> coal deafult
 */

const getColor = (label) => {
  if (label.length === 0) return main.primary;

  const [name, variant] = label.split(' ');

  if (mainKeys.includes(name)) return colors[name];

  return colors[name][variant || 'default'] || colors.primary;
};

export default getColor;
