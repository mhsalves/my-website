import React from 'react';
import {
  bool, number, oneOf, string,
} from 'prop-types';

import IconSvg from './styles';

function Icon(props) {
  const {
    glyph, size, ...other
  } = props;

  return (
    <IconSvg {...other} size={size}>
      <use href={`/static/svg/${size}.svg#${glyph}`} />
    </IconSvg>
  );
}

Icon.propTypes = {
  glyph: string.isRequired,
  size: oneOf(['small', 'base', 'large']),
  color: string,
  beforeText: bool,
  rotate: number,
  spin: bool,
};

Icon.defaultProps = {
  size: 'base',
  color: '',
  beforeText: false,
  rotate: null,
  spin: false,
};

export default Icon;
