function getColor(color, theme) {
  const [name, variant] = color.split(' ');
  if (variant) return theme.colors[name][variant];

  return theme.colors[name];
}

export default getColor;
