import React from 'react';
import { string, bool } from 'prop-types';

import {
  AvatarContainer,
  AvatarContent,
  AvatarImage,
} from './styles';

function Avatar(props) {
  const { src, alt, ...other } = props;

  return (
    <AvatarContainer {...other}>
      <AvatarContent {...other}>
        <AvatarImage src={src} alt={alt} />
      </AvatarContent>
    </AvatarContainer>
  );
}

Avatar.propTypes = {
  src: string,
  alt: string.isRequired,
  rounded: bool,
};

Avatar.defaultProps = {
  src: '',
  rounded: true,
};

export default Avatar;
