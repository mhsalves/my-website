import React from 'react';
import {
  node, func, bool,
} from 'prop-types';

import {
  DropdownContainer,
  contentStyle,
} from './styles';

function Dropdown(props) {
  const { handler, content, isOpen } = props;

  return (
    <DropdownContainer>
      {handler}
      {content({ contentStyle, isOpen })}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  handler: node.isRequired,
  content: func.isRequired,
  isOpen: bool,
};

Dropdown.defaultProps = {
  isOpen: false,
};

export default Dropdown;
