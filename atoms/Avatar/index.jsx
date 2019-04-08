import React from 'react';
import { string, bool } from 'prop-types';

import {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
} from './styles';

function Avatar(props) {
  const { src, alt, rounded } = props;

  return (
    <AvatarContainer rounded={rounded}>
      <AvatarContent rounded={rounded}>
        <AvatarImage src={src} alt={alt} />
      </AvatarContent>
    </AvatarContainer>
  );
}

Avatar.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  rounded: bool,
};

Avatar.defaultProps = {
  rounded: false,
};

export default Avatar;
